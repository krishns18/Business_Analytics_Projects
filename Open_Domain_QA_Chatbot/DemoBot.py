#!/usr/bin/python3
########################################################################################
# Name: ChatBot.py                                                                     #
# Author(s): Shailesh Krishna, Sally Mostafa, U Khyoi Nu                               #
# Description: Open domain QA chatbot wrapper script.                                  #
########################################################################################

# Importing dependencies.
import re
import json
# Data Loader
from DataLoader import DataLoader
# Query Parser
from QueryParser import QueryParser
# Answer Extractor
from AnswerExtractor import AnswerExtractor
'''
Our chatbot consists of three main components.
1. Question Processing
2. Document Retrieval
3. Answer Extraction

For the initial development purpose, we choose only one topic (Marvel Comics) from the
SQUAD dataset and we will incorporate other domains and topics as we make more progress.
'''
# Initializing
print("Warming up...")
# Extract data for the topic.
data_loader = DataLoader()
topic_paragraphs = data_loader.get_paragraphs('Marvel_Comics')

print("SQUADBot>Hi There! I am SQUADBot ready to answer your questions.")
user_name = input("SQUADBot> What's your name? ")
print("SQUADBot> Welcome ",user_name,"!!")
print("SQUADBot>Please type your question. To exit the conversation just type Exit.")

# Flag to determine the status of convesation. Setting it as active.
botActive = True
# Start processing...
while botActive:
  question = input(str(user_name) + ">")
  # Checking if a user entered anything.
  if(not len(question) > 0):
    print("SQUADBot>" + str(user_name) + "I am waiting for your question.")
  elif question.strip().lower() == 'exit':
    print("SQUADBot> Thank You " + str(user_name) + " !")
    botActive = False
  else:
    # Process the user question and return the answer.
    queryParser = QueryParser()
    parsed_query = queryParser.parse_query(question)
    # Answer extraction
    # Instantiate the object using the paragraphs retrieved.
    answerExtractor = AnswerExtractor(topic_paragraphs)
    answer = answerExtractor.retrieve(parsed_query)
    print("SQUADBot>" + str(answer))





