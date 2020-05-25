#####################################################################################
# Name: DateParser.py                                                               #
# Description: A regex based date parser to extract date information from related   #
#              textual information.                                                 #
#####################################################################################

# Importing dependencies
import re
import string

class DateParser:
  def __init__(self):
    # Define the patterns and also initialize the expressions to be used for date extraction.
    # Pattern 1
    all_numbers = "(^a(?=\s)|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety|hundred|thousand)"
    pattern_1 = "((\d+|(" + all_numbers + "[-\s]?)+) " + "(year|day|week|month)" + "s? " + "(before|after|earlier|later|ago)" + ")"
    self.expression_1 = re.compile(pattern_1, re.IGNORECASE)
    # Pattern 2
    all_days = "(monday|tuesday|wednesday|thursday|friday|saturday|sunday)"
    months = "(january|february|march|april|may|june|july|august|september|october|november|december)"
    pattern_2 = "(" + "(this|next|last)" + " (" + "(year|day|week|month)" + "|" + all_days + "|" + months + "))"
    self.expression_2 = re.compile(pattern_2, re.IGNORECASE)
    # Pattern 3
    pattern_3 = "(today|yesterday|tomorrow|tonight|tonite)"
    self.expression_3 = re.compile(pattern_3,re.IGNORECASE)
    # Pattern 4 (Dates)
    pattern_4 = "\d+[/-]\d+[/-]\d+ \d+:\d+:\d+\.\d+"
    self.expression_4 = re.compile(pattern_4)
    # Pattern 5 (Year)
    pattern_5 = "((?<=\s)\d{4}|^\d{4})"
    self.expression_5 = re.compile(pattern_5)
    # Pattern 6 (Date Month Year)
    date = "([012]?[0-9]|3[01])"
    year = "((?<=\s)\d{4}|^\d{4})"
    pattern_6 = "(" + date + " " + months + " " + year + ")"
    self.expression_6 = re.compile(pattern_6, re.IGNORECASE)
    # Pattern 7 April 2nd, 2019
    pattern_7 = "(" + months + " " + date + "[th|st|rd]?[,]? " + year + ")"
    self.expression_7 = re.compile(pattern_7,re.IGNORECASE)

  def extractDate(self, text):
    all_dates = []
    # Match patterns like 'three days before' etc.
    matches = self.expression_1.findall(text)
    matches = [item[0] for item in matches if len(item) > 1]
    for date in matches:
      all_dates.append(date)
    # Variations of above.
    matches = self.expression_2.findall(text)
    matches = [item[0] for item in matches if len(item) > 1]
    for date in matches:
      all_dates.append(date)
    # Match variations of days like today, tomorrow.
    matches = self.expression_3.findall(text)
    for date in matches:
      all_dates.append(date)
    # Match date formats
    matches = self.expression_4.findall(text)
    for date in matches:
      all_dates.append(date)
    # Date : Date-Month-Year
    matches = self.expression_6.findall(text)
    matches = [item[0] for item in matches if len(item) > 1]
    for date in matches:
      all_dates.append(date)
    # Match dates like  April 2nd, 2019
    matches = self.expression_7.findall(text)
    matches = [item[0] for item in matches if len(item) > 1]
    for date in matches:
      all_dates.append(date)
    # Year
    matches = self.expression_5.findall(text)
    for date in matches:
      all_dates.append(date)
    
    return all_dates

  

