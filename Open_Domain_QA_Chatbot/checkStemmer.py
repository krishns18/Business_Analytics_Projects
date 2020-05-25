#!/usr/bin/python3
from nltk.stem import PorterStemmer
from nltk.tokenize import sent_tokenize, word_tokenize

# Dependencies.
from DataLoader import DataLoader
from Stemmer import Stemmer

dm = DataLoader()
stemmer = Stemmer()
porter_stemmer = PorterStemmer()

#print(stemmer.process('caresses'))
#print(stemmer.process('cats'))
#print(stemmer.process('happy'))
#print(stemmer.process('relational'))
#print(stemmer.process('digitizer'))
#print(stemmer.process('vietnamization'))
#print(stemmer.process('operator'))
#print(stemmer.process('callousness'))
#print(stemmer.process('electrical'))
#print(stemmer.process('revival'))
#print(stemmer.process('bowdlerize'))
#print(stemmer.process('adoption'))
#print(stemmer.process('cease'))
#print(stemmer.process('rate'))
#print(stemmer.process('controll'))

# Checking the performance of Porter Stemmer created.
paragraphs = dm.get_paragraphs('Marvel_Comics')

total_words = 0
matching_words = 0

for para in paragraphs:
  words = word_tokenize(para)

  for item in words:
    if len(item) > 2:
      total_words += 1
      word = stemmer.process(item.lower())
      if word == porter_stemmer.stem(item):
        matching_words += 1

print("Total word count is: {}".format(total_words))
print("Total matching word count is: {}".format(matching_words))
print("Accuracy is: {}".format((matching_words/total_words)* 100))







