#!/usr/bin/python3

import json
import sys

filename = open('data/squad_training_data.json','r')

data = filename.readline()

filename.close()

jsonData = json.loads(data)

#print(jsonData)

# Create dictionary of topics and their indexes in the dataset. 

topics = {}

for i in range(0, len(jsonData['data'])):
  topic = jsonData['data'][i]['title']
  index = i
  topics[topic] = index

print(topics)
sys.exit()

# Modern_history
# Get the total list of topic names
print("Total topics in the dataset are: {}".format(len(topics)))

# Restricting the focus on one single topic for testing purpose.
# Topic: 'Marvel_Comics'

# Get the index of Marvel_Comics
index_marvel_comics = topics['Marvel_Comics']

# Get all the json data for the topic.
marvel_data = jsonData['data'][index_marvel_comics]

# Get all the questions
questions = []
for i in range(0,len(marvel_data['paragraphs'])):
  para = marvel_data['paragraphs'][i]
  for j in range(0, len(para['qas'])):
    questions.append(para['qas'][j]['question'])

# Print all the questions
#for item in questions:
#  print(item)
print("Total number of questions in the dataset are: {}".format(len(questions)))

# Get all the paragraphs for marvel.

paragraphs = []

for i in range(0,len(marvel_data['paragraphs'])):
  paragraphs.append(marvel_data['paragraphs'][i]['context'])

print("Total number of paragraphs for marvel data are: {}".format(len(paragraphs)))

print( "\n".join(paragraphs))







