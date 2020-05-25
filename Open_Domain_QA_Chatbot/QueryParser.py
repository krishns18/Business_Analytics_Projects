#####################################################################################
# Name: QueryParser.py                                                              #
# Description: Module to parse raw user query to determine the question and answer  #
#              type. It returns the required search query for information retrieval.#
#####################################################################################

# Importing depedencies.
from nltk import pos_tag,word_tokenize,ne_chunk
from nltk.corpus import wordnet,stopwords
from Stemmer import Stemmer
from nltk.stem.porter import PorterStemmer

class QueryParser:
  def __init__(self):
    # parsedQuery object
    self.parsedQuery = {}
    # Initialize stop words
    self.stopWords = stopwords.words('english')
  
  # Parse query.
  def parse_query(self,question):
    # Save the original question
    self.parsedQuery['original_question'] = question
    '''
    Determine the question type and create search query.
    Type of questions:
      1. WP: Who
      2. WDT: What, Why, How
      3. WP$: Whose
      4. WRB: Where
    Reference: https://www.ling.upenn.edu/courses/Fall_2003/ling001/penn_treebank_pos.html
    '''
    Tags = ['WP','WDT','WP$','WRB']
    part_of_speech = pos_tag(word_tokenize(question))
    # Question tags
    question_tags = []
    # Search query
    search_query = []
    for item in part_of_speech:
      if item[1] in Tags:
        question_tags.append(item[1])
      else:
        # Excluding question tag from the query and appending rest of the tokens to query.
        search_query.append(item[0])
    
    # Question type.
    question_type = ''
    if(len(question_tags) > 1):
      # Set question type as complex.
      question_type = 'complex'
    elif(len(question_tags) == 1):
      question_type = question_tags[0]
    else:
      # Not a question
      question_type = 'None'

    # store question type.
    self.parsedQuery['question_type'] = question_type

    # Create query vector
    # Need it for calculating similarity and information retrieval.
    vector = {}
    stemmer = PorterStemmer() #Stemmer() 
    for item in search_query:
      # Remove stop words
      if (item in self.stopWords):
        continue
      # Perform stemming
      processed_token = stemmer.stem((item.lower())) #stemmer.process(item)
      if processed_token in vector.keys():
        vector[processed_token] += 1
      else:
        vector[processed_token] = 1

    # Store query vector
    self.parsedQuery['query_vector'] = vector

    # get the answer type
    answer_type = self.getAnswerType(question)

    # Store the answer type
    self.parsedQuery['answer_type'] = answer_type

  # Answer Type
  '''
    Based upon the question type determine the answer type.
    Such as PERSON, ORGANIZATION, DATE etc.
  '''
  def getAnswerType(self,question):
    Tags = ['WP','WDT','WP$','WRB']
    part_of_speech = pos_tag(word_tokenize(question))
    question_tag = None
    answer_type = 'FULL' # default answer type
    for item in part_of_speech:
      if item[1] in Tags:
        question_tag = item[0].lower()
        break
    
    if (question_tag == None):
      if (len(part_of_speech) > 1):
        if (part_of_speech[1][1].lower() in ['is','are','can','should']):
          question_tag = 'YESNO'

    # Process other types
    if question_tag == 'who':
      answer_type = 'PERSON'
    elif question_tag == 'where':
      answer_type = 'LOCATION'
    elif question_tag == 'when':
      answer_type = 'DATE'
    elif question_tag == 'what':
      # Definition based question
      question_tokens = self.getChunks(question)
      # Tried different lengths, with 4 it seemed to work better.
      if (len(question_tokens) == 4):
        # Nouns and its variants
        if question_tokens[1][1] in ['is','are','was','where'] \
          and question_tokens[2][0] in ['NN','NNS','NNP','NNPS']:
          self.parsedQuery['original_question'] = " ".join([question_tokens[0][1],question_tokens[2][1],question_tokens[1][1]])
          answer_type = 'DEFINITION'

        for item in part_of_speech:
          if item[0].lower() in ['city','place','country']:
            answer_type = 'LOCATION'
          elif item[0].lower() in ['company','industry','organization']:
            answer_type = 'ORGANIZATION'
          elif item[1] in ['NN', 'NNPS']:
            answer_type = 'FULL'
          elif item[1] in ['NNP','NNPS']:
            answer_type = 'FULL'

    elif question_tag == 'how':
      if len(part_of_speech) > 1:
        item = part_of_speech[2]
        if item[0].lower() in ['few','great','little','many','much']:
          answer_type = 'QUANTITY'
        elif item[0].lower() in ['tall','wide','big','far']:
          answer_type = 'LINEAR_MEASURE'

    return answer_type

  '''
  There are instances when two NN tags are consecutive, for example name of a person.
  If there are two consecutive NN tags, then merge them into a single NN.
  Name like Stan Lee.
  '''
  def getChunks(self,question):
    question_chunks = []
    answer_tokens = word_tokenize(question)
    named_chunks = pos_tag(answer_tokens)
    prev = named_chunks[0][1]
    item = {
      'pos': prev,
      'chunk': []
    }
    for c in named_chunks:
      (t,p) = c
      if p == prev:
        prev = p
        item['chunk'].append(t)
        # determiner, adjective
      elif prev in ['DT','JJ']:
        prev = p
        item['pos'] = p
        item['chunk'].append(t)
      else:
        if not len(item['chunk']) == 0:
          question_chunks.append((item['pos'], " ".join(item['chunk'])))
          item = {
            'pos': p,
            'chunk': [t]
          }
          prev = p
    if not len(item['chunk']) == 0:
      question_chunks.append((item['pos'], " ".join(item['chunk'])))
    
    return question_chunks




  
  
  