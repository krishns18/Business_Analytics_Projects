######################################################################################
# Name: AnswerExtractor.py                                                           #
# Description: Module to extract the answer for the parsed query using the contextual#
#              information provided.                                                 #
######################################################################################

# Importing dependencies
import json
import math
import re
from nltk.corpus import stopwords
from nltk.tokenize import sent_tokenize, word_tokenize
from nltk.stem.porter import PorterStemmer
from nltk.tree import Tree
from nltk import pos_tag,ne_chunk
from DateParser import DateParser

class AnswerExtractor:
  def __init__(self, data):
    self.data = data
    # Initialize stop words
    self.stopWords = stopwords.words('english')
    # compute TF IDF.
    self.TFIDF()

  # Calculate Term Frequency
  '''
    Pass the entire paragraph as a string and get the dictionary(hash) of word and its count.
  '''
  def getTFCount(self,paragraph):
    stemmer = PorterStemmer()
    all_sentences = sent_tokenize(paragraph)
    frequency = {} # word frequency
    for sentence in all_sentences:
      for word in word_tokenize(sentence):
        if word.lower() in self.stopWords:
          continue # ignore teh stop words
        if not re.match(r"[a-zA-Z0-9\-\_\\/\.\']+",word):
          continue
        # Perform stemming
        processed_word = stemmer.stem(word.lower())
        if processed_word in frequency.keys():
          frequency[processed_word] += 1
        else:
          frequency[processed_word] = 1

    return frequency

  # Compute TF-IDF
  def TFIDF(self):
    # Calculate term frequency.
    paragraphs = {}
    for i in range(0,len(self.data)):
      word_frequency = self.getTFCount(self.data[i])
      paragraphs[i] = {}
      paragraphs[i]['word_frequency'] = word_frequency

    # Store the paragraph information
    self.paragraphs = paragraphs

    # Words in paragraphs
    words = {}
    for i in range(0,len(self.paragraphs)):
      for word in self.paragraphs[i]['word_frequency'].keys():
        if word in words.keys():
          words[word] += 1
        else:
          words[word] = 1
    
    # IDF
    idf = {}
    for word in words:
      # Laplace Smoothing to avoid division by zero. Can try other smoothing methods as well.
      idf[word] = math.log((len(self.data) + 1)/words[word])

    # Store the idf information
    self.idf = idf

    # Compute Paragraph Vector
    for i in range(0,len(self.paragraphs)):
      self.paragraphs[i]['vector'] = {}
      for word in self.paragraphs[i]['word_frequency'].keys():
        self.paragraphs[i]['vector'][word] = self.paragraphs[i]['word_frequency'][word] * self.idf[word]

  # Compute Similarity (Cosine)
  '''
    Compute the similarity between the query vector and paragraph vector.
    Here, the distance is the distance of queryVector from origin. 
  '''
  def computeSimilarity(self,paragraphs,qV,d):
    # Calculate vector distance.
    distance = 0
    for word in paragraphs['word_frequency'].keys():
      distance += math.pow(paragraphs['word_frequency'][word]*self.idf[word],2)
    distance = math.pow(distance,0.5)
    if distance == 0:
      return 0

    # Calculate dot product
    dot_product = 0
    for word in qV.keys():
      if word in paragraphs['word_frequency']:
        q = qV[word]
        w = paragraphs['word_frequency'][word]
        idf = self.idf[word]
        dot_product += q * w * idf * idf

    similarity = dot_product/(distance * d)
    return similarity

  # Get relevant paragraphs
  def getRelevantParagraphs(self,queryVector):
    distance = 0
    for word in queryVector.keys():
      if word in self.idf.keys():
        distance += math.pow(queryVector[word] * self.idf[word],2)
    distance = math.pow(distance,0.5)
    if distance == 0:
      return [None]
    
    rankings = []
    for i in range(0,len(self.paragraphs)):
      similarity = self.computeSimilarity(self.paragraphs[i], queryVector, distance)
      rankings.append((i,similarity))

    return sorted(rankings,key=lambda item: (item[1],item[0]), reverse=True)[:3] # Top 3 paragraphs.

  # N-gram sentence similarity
  def ngram_sentence_similarity(self, question, sentence, n):
    stemmer = PorterStemmer()
    # Define lambda functions.
    retrieveTokens = lambda item:[stemmer.stem(w.lower()) for w in word_tokenize(item)]
    retrieveNgrams = lambda item,k:[ " ".join([item[j+i] for i in range(0,k)]) for j in range(0,len(item)-k+1)]

    # Get tokens
    question_token = retrieveTokens(question)
    sentence_token = retrieveTokens(sentence)

    if (len(question_token) > n):
      # Get unique values.
      question_ngram = set(retrieveNgrams(question_token,n))
      sentence_ngram = set(retrieveNgrams(sentence_token,n))
      if (len(sentence_ngram) < n):
        return 0
      similarity = len(question_ngram.intersection(sentence_ngram))/len(question_ngram.union(sentence_ngram))
      return similarity
    else:
      return 0

  # Sentence similarity
  '''
    Compute similarity between sentence and query vector based on the common words.
  '''
  def sentence_similarity(self,qV, sentence):
    sentence_tokens = word_tokenize(sentence)
    stemmer = PorterStemmer()
    for i in range(0,len(sentence_tokens)):
      sentence_tokens[i] = stemmer.stem(sentence_tokens[i].lower())
    similarity = 0
    for word in qV.keys():
      processed_word = stemmer.stem(word.lower())
      if processed_word in sentence_tokens:
        similarity += 1
    
    return similarity/(len(sentence_tokens) * len(qV.keys()))

  # Get relevant sentences
  def getRelevantSentences(self,sentences,parsedQuery, n=2):
    relevant_sentences = []
    for sentence in sentences:
      similarity = 0
      if (len(word_tokenize(parsedQuery['original_question'])) > n+1):
        similarity = self.ngram_sentence_similarity(parsedQuery['original_question'],sentence,n)
      else:
        similarity = self.sentence_similarity(parsedQuery['query_vector'],sentence)

      relevant_sentences.append((sentence,similarity))
    
    return sorted(relevant_sentences, key=lambda item: (item[1],item[0]), reverse=True)
    
  # Named entities
  def getNamedEntities(self,items):
    entities = []
    for item in items:
      tokens = word_tokenize(item)
      named_chunk = ne_chunk(pos_tag(tokens))
      entity = {
        'label': None,
        'chunk': []
      }
      for chunk in named_chunk:
        if(type(chunk) == Tree):
          if(entity['label'] == None):
            entity['label'] = chunk.label()
            entity['chunk'].extend([token for (token,pos) in chunk.leaves()])
        else:
          (token,pos) = chunk
          if pos == 'NNP':
            entity['chunk'].append(token)
          else:
            if not len(entity['chunk']) == 0:
              entities.append((entity['label']," ".join(entity['chunk'])))
              entity = {
                'label': None,
                'chunk': []
              }
      if not len(entity['chunk']) == 0:
        entities.append((entity['label'], " ".join(entity['chunk'])))

      return entities

  # Extract Chunks
  def getChunks(self,items):
    entities = []
    for item in items:
      tokens = word_tokenize(item)
      if len(tokens) == 0:
        continue
      named_chunks = pos_tag(tokens)

      prev = named_chunks[0][1]
      entity = {
        'pos': prev,
        'chunk': []
      }
      for chunk in named_chunks:
        (token,pos) = chunk
        if pos == prev:
          prev = pos
          entity['chunk'].append(token)
          # Adjective, determiner
        elif prev in ['DT','JJ']:
          prev = pos
          entity['pos'] = pos
          entity['chunk'].append(token)
        else:
          if not len(entity['chunk']) == 0:
            entities.append((entity['pos']," ".join(entity['chunk'])))
            entity = {
              'pos': pos,
              'chunk': []
            }
      if not len(entity['chunk']) == 0:
        entities.append((entity['pos']," ".join(entity['chunk'])))
    
    return entities

  # Retrieve
  def retrieve(self,parsedQuery):
    '''
      1. Find the relevant paragraphs
      2. Find the relevant sentences.
      3. Return the answer from the relevant sentences based on the expected answer type.
    '''
    # Find the relevant paragraphs
    relevant_paragraphs = self.getRelevantParagraphs(parsedQuery['query_vector'])
    #print(relevant_paragraphs)

    # Retrieve all the sentences.
    all_sentences = []
    for item in relevant_paragraphs:
      if item != None:
        para = self.data[item[0]]
        all_sentences.extend(sent_tokenize(para))

    # Find the relevant sentences from the sentences.
    if len(all_sentences) == 0:
      return "My apologies! I don't know the answer."
    
    relevant_sentences = self.getRelevantSentences(all_sentences,parsedQuery,1) # Unigram similarity
    #print(relevant_sentences)
    # Now we have gathered the relevant sentences, it's time to find the answer from them based on the answer type.
    answer_type = parsedQuery['answer_type']
    # Set the default answer as the first sentence.
    answer = relevant_sentences[0][0]
    # Stemmer object
    stemmer = PorterStemmer()

    # Extract the answer.
    if answer_type == 'DEFINITION':
      retrieved_sentences = self.getRelevantSentences(all_sentences,parsedQuery,1)
      answer = retrieved_sentences[0][0]
    # Company, Organization
    elif answer_type == 'ORGANIZATION':
      # Get the named entities.
      named_entities = self.getNamedEntities([item[0] for item in relevant_sentences])
      for entity in named_entities:
        if entity[0] == 'ORGANIZATION':
          answer = entity[1]
          answer_tokens = [stemmer.stem(word.lower()) for word in word_tokenize(answer.lower())]
          question_tokens = [stemmer.stem(word.lower()) for word in word_tokenize(parsedQuery['original_question'].lower())]
          if [(ans in question_tokens) for ans in answer_tokens].count(True) >= 1:
            continue
          break
    # Person
    elif answer_type == 'PERSON':
      named_entities = self.getNamedEntities([item[0] for item in relevant_sentences])
      for entity in named_entities:
        if entity[0] == 'PERSON':
          answer = entity[1]
          answer_tokens = [stemmer.stem(word.lower()) for word in word_tokenize(answer.lower())]
          question_tokens = [stemmer.stem(word.lower()) for word in word_tokenize(parsedQuery['original_question'].lower())]
          if [(ans in question_tokens) for ans in answer_tokens].count(True) >= 1:
            continue
          break
    # Location
    elif answer_type == 'LOCATION':
      named_entities = self.getNamedEntities([item[0] for item in relevant_sentences])
      for entity in named_entities:
        if entity[0] == 'GPE':
          answer = entity[1]
          answer_tokens = [stemmer.stem(word.lower()) for word in word_tokenize(answer.lower())]
          question_tokens = [stemmer.stem(word.lower()) for word in word_tokenize(parsedQuery['original_question'].lower())]
          if [(ans in question_tokens) for ans in answer_tokens].count(True) >= 1:
            continue
          break
    # Date
    elif answer_type == 'DATE':
      dp = DateParser()
      dates = []
      for sentence in relevant_sentences:
        dates.extend(dp.extractDate(sentence[0]))
      if len(dates) > 0:
        answer =  dates[0]
    # Other types
    elif answer_type in ['NN','NNP']:
      named_entities = self.getChunks([item[0] for item in relevant_sentences])
      for entity in named_entities:
        if answer_type == 'NN':
          if entity[0] == 'NN' or entity[0] == 'NNS':
            answer = entity[1]
            answer_tokens = [stemmer.stem(word.lower()) for word in word_tokenize(answer.lower())]
            question_tokens = [stemmer.stem(word.lower()) for word in word_tokenize(parsedQuery['original_question'].lower())]
            if [(ans in question_tokens) for ans in answer_tokens].count(True) >= 1:
              continue
            break
            
        elif answer_type == 'NNP':
          if entity[0] == 'NNP' or entity[0] == 'NNPS':
            answer = entity[1]
            answer_tokens = [stemmer.stem(word.lower()) for word in word_tokenize(answer.lower())]
            question_tokens = [stemmer.stem(word.lower()) for word in word_tokenize(parsedQuery['original_question'].lower())]
            if [(ans in question_tokens) for ans in answer_tokens].count(True) >= 1:
              continue
            break

    return answer

  
    
    

