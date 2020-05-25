#!/usr/bin/python3
########################################################################################
# Name: ChatBot.py                                                                     #
# Author(s): Shailesh Krishna, Sally Mostafa, U Khyoi Nu                               #
# Description: Open domain QA chatbot wrapper script.                                  #
########################################################################################

# Importing dependencies.
import re
import json
import sys
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

For the development purpose, we choose Marvel Comics and Mordern History as topics from the
SQUAD dataset. We plan to expand it to all the topics later.
'''
# Initializing
print("SQUADBot>Hi There! I am SQUADBot.")
print("SQUADBot>I can answer your questions about Marvel Comics and Modern History.")
# Get user name.
user_name = input("SQUADBot> What's your name? => ")
print("SQUADBot> Welcome ",user_name,"!!","Let's begin...")
# Topic selection
print("SQUADBot>",user_name,"which topic you want to explore today?")
# Flag to get the correct input from user.
invalidChoice = True
user_topic=0
while invalidChoice:
  user_topic = int(input("SQUADBot>Enter 1 for Marvel Comics and 2 for Modern History => "))
  if(not user_topic > 0):
    print("SQUADBot>" + str(user_name) + "Please choose the topic.")
  elif(user_topic == 1 or user_topic == 2):
    invalidChoice = False
  else:
    print("SQUADBot>" + str(user_name) + "Please enter the correct value.")

# Extract data for either Marvel Comics and Modern History
# Data loader object.
print("Warming up....")
data_loader = DataLoader()
topic_paragraphs = ""
if user_topic == 1:
  topic_paragraphs = data_loader.get_paragraphs('Marvel_Comics')
elif user_topic == 2:
  topic_paragraphs = data_loader.get_paragraphs('Modern_history')

# Instantiate the Answer extraction object with retrieved paragraphs.
answerExtractor = AnswerExtractor(topic_paragraphs)
print("SQUADBot>Loaded depedencies. Please type your question. To exit the conversation just type Exit.")
# Flag to determine the status of convesation. Setting it as active.
botActive = True
# Start processing...
while botActive:
  question = input(str(user_name) + ">")
  # Checking if the user entered anything.
  if(not len(question) > 0):
    print("SQUADBot>" + str(user_name) + "! I am waiting for your question.")
  elif question.strip().lower() == 'exit':
    print("SQUADBot> Thank You " + str(user_name) + " !")
    botActive = False
  else:
    # Process the user question and return the answer.
    # Instantiate the object.
    queryParser = QueryParser()
    # Parse the query.
    queryParser.parse_query(question)
    #print(queryParser.parsedQuery)
    # Extract the answer
    answer = answerExtractor.retrieve(queryParser.parsedQuery)
    print("SQUADBot>" + answer)