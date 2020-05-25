#####################################################################################
# Name: DataLoader.py                                                               #
# Description: Module to provide data from the SQUAD dataset for the selected topic #
#####################################################################################

# Importing dependencies
import json

class DataLoader:
  def __init__(self):
    # Parsing the training json file
    datafile = open('data/squad_training_data.json','r')
    rawdata = datafile.readline()
    datafile.close()
    self.jsonData = json.loads(rawdata)

    # Dictionary containing all the topics. 
    self.topics = {}

    # Populate the topics dictionary. 
    for i in range(0,len(self.jsonData['data'])):
      topic = self.jsonData['data'][i]['title']
      # Add entry in the dictionary with the index
      self.topics[topic] = i


  # Get total number of topics from the dataset.
  def get_total_topics(self):
     return len(self.topics)

  # Get index of topic in the dataset
  def get_index(self, topic):
     return self.topics[topic]

  # Get the paragraphs for the topic.
  def get_data(self, topic_index):
    return self.jsonData['data'][topic_index]

  # Get the paragraphs for the topic.
  def get_paragraphs(self, topic):
    topic_index = self.get_index(topic)
    topic_data = self.get_data(topic_index)
    paragraphs = []
    for i in range(0,len(topic_data['paragraphs'])):
      paragraphs.append(topic_data['paragraphs'][i]['context'])

    return paragraphs

  # Get all the questions for the topic
  def get_questions(self,topic):
    topic_index = self.get_index(topic)
    topic_data = self.jsonData['data'][topic_index]
    questions = []
    for i in range(0,len(topic_data['paragraphs'])):
      para = topic_data['paragraphs'][i]
      for j in range(0,len(para['qas'])):
        questions.append(para['qas'][j]['question'])
    
    return questions



   
      
     
    
