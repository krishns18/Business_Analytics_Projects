####################################################################################
# Name: Stemmer.py                                                                 #
# Description: Implementation of Porter Stemmer Algorithm as described in the paper#
#              https://tartarus.org/martin/PorterStemmer/def.txt                   #
####################################################################################

# Importing dependencies.
import re

class Stemmer:
  def __init__(self):
    self.data = []

  # process the token.
  def process(self,token):
    """
    Takes the word as input and returns the processed value.
    """
    processed_data = self.step_1a(token)

    processed_data = self.step_1b(processed_data)

    processed_data = self.step_1c(processed_data)

    processed_data = self.step_2(processed_data)

    processed_data = self.step_3(processed_data)

    processed_data = self.step_4(processed_data)

    processed_data = self.step_5a(processed_data)

    processed_data = self.step_5b(processed_data)

    return processed_data
 
  #===================== HELPER METHODS ========================
  # Check Vowel
  def isVowel(self,item):
    #lowercase
    lowercaseItem = item.lower()
    if (lowercaseItem == 'a' or lowercaseItem == 'e' or lowercaseItem == 'i' or lowercaseItem == 'o' or lowercaseItem == 'u'):
      return True
    else:
      return False

  # Has Vowel
  def hasVowel(self,token):
    for i in range(0, len(token)):
      if self.isVowel(token[i]):
        return True
    
    return False

  # Check Consonant
  def isConsonant(self,item):
    return (not self.isVowel(item))

  # Process token
  def process_token(self, token):
    temp = []
    for i in range(0, len(token)):
      if self.isVowel(token[i]):
        temp.append('V') # vowel
      else:
        temp.append('C') # consonant
    
    processed_word = ''

    for item in temp:
      processed_word += item

    return processed_word

  # Measure count
  def measure_count(self,token):
    processed_str = self.process_token(token)
    # count VC in the processed str
    countVC = processed_str.count('VC')
    return (countVC)

  # getBase
  def getBaseWord(self, token, suffix):
    suffixLength = token.rfind(suffix)
    base_word = token[:suffixLength]
    return base_word

  # (*d): The stem ends with double consonant e.g -TT, -SS
  def double_consonant(self, token):
    processed_str = self.process_token(token)
    if processed_str[-1] == 'C' and processed_str[-2] == 'C':
      return True
    else:
      return False

  # (*o): The stem ends cvc, where the second c is not W, X or Y
  def check_cvc(self, token):
    word = token.lower()
    processed_str = self.process_token(word)
    if len(processed_str) < 3:
      return False

    if (processed_str[-1] == 'C' and processed_str[-2] == 'V' and processed_str[-3] == 'C' and word[-1] not in 'wxy'):
      return True
    else:
      return False

  #================= RULE IMPLEMENTATIONS ======================
  # Step 1a
  def step_1a(self,token):
    """
    SSES -> SS                         caresses  ->  caress
    IES  -> I                          ponies    ->  poni
                                       ties      ->  ti
    SS   -> SS                         caress    ->  caress
    S    ->                            cats      ->  cat
    """
    word = token.lower() # converting to lowercase
    processed_word = word # initialized the new word with the existing word.
    # Rule implementation
    if word.endswith('sses'):
      processed_word = re.sub(r'sses','ss', word)
    elif word.endswith('ies'):
      processed_word = re.sub(r'ies','i',word)
    elif word.endswith('ss'):
      processed_word = word
    elif word.endswith('s'):
      processed_word = re.sub(r's','',word)
    
    return processed_word

  # Additional step 1b
  def additional_step_1b(self,token):
    """
    If the second or third of the rules in Step 1b is successful, the following is done:
    AT -> ATE                       conflat(ed)  ->  conflate
    BL -> BLE                       troubl(ed)   ->  trouble
    IZ -> IZE                       siz(ed)      ->  size
    (*d and not (*L or *S or *Z))
       -> single letter
                                    hopp(ing)    ->  hop
                                    tann(ed)     ->  tan
                                    fall(ing)    ->  fall
                                    hiss(ing)    ->  hiss
                                    fizz(ed)     ->  fizz
    (m=1 and *o) -> E               fail(ing)    ->  fail
                                    fil(ing)     ->  file
    """
    word = token
    if (word.endswith('at') or word.endswith('bl') or word.endswith('iz')):
      word += 'e'
    elif self.double_consonant(word) and not word.endswith('s') and not word.endswith('z') and not word.endswith('l'):
      word = word[:-1]
    elif self.measure_count(word) and self.check_cvc(word):
      word += 'e'

    return word

  # Step 1b
  def step_1b(self,token):
    """
    (m>0) EED -> EE                    feed      ->  feed
                                       agreed    ->  agree
    (*v*) ED  ->                       plastered ->  plaster
                                       bled      ->  bled
    (*v*) ING ->                       motoring  ->  motor
                                       sing      ->  sing
    """

    word = token # already in lowercase
    processed_word = word
    # Rule implementation
    if word.endswith('eed'):
      suffixLength = len('eed') #3
      base_word = word[:suffixLength]
      # (m>0)
      if self.measure_count(base_word) > 0:
        processed_word = re.sub(r'eed','ee',word)

    elif word.endswith('ed'):
      suffixLength = word.rfind('ed')
      base_word = word[:suffixLength]
      # Checking for vowel.
      if self.hasVowel(base_word):
        processed_word = word[:suffixLength]
        processed_word = self.additional_step_1b(processed_word)

    elif word.endswith('ing'):
      suffixLength = word.rfind('ing')
      base_word = word[:suffixLength]
      if self.hasVowel(base_word):
        processed_word = word[:suffixLength]
        processed_word = self.additional_step_1b(processed_word)

    return processed_word

  # Step 1c
  def step_1c(self,token):
    """
    Step 1c
    (*v*) Y -> I                    happy        ->  happi
                                    sky          ->  sky
    """
    word = token
    if self.hasVowel(token) and token.endswith('y'):
      word = re.sub(r'y','i',token)
    
    return word

  # Step 2
  def step_2(self,token):
    """
    (m>0) ATIONAL ->  ATE           relational     ->  relate
    (m>0) TIONAL  ->  TION          conditional    ->  condition
                                    rational       ->  rational
    (m>0) ENCI    ->  ENCE          valenci        ->  valence
    (m>0) ANCI    ->  ANCE          hesitanci      ->  hesitance
    (m>0) IZER    ->  IZE           digitizer      ->  digitize
    (m>0) ABLI    ->  ABLE          conformabli    ->  conformable
    (m>0) ALLI    ->  AL            radicalli      ->  radical
    (m>0) ENTLI   ->  ENT           differentli    ->  different
    (m>0) ELI     ->  E             vileli        - >  vile
    (m>0) OUSLI   ->  OUS           analogousli    ->  analogous
    (m>0) IZATION ->  IZE           vietnamization ->  vietnamize
    (m>0) ATION   ->  ATE           predication    ->  predicate
    (m>0) ATOR    ->  ATE           operator       ->  operate
    (m>0) ALISM   ->  AL            feudalism      ->  feudal
    (m>0) IVENESS ->  IVE           decisiveness   ->  decisive
    (m>0) FULNESS ->  FUL           hopefulness    ->  hopeful
    (m>0) OUSNESS ->  OUS           callousness    ->  callous
    (m>0) ALITI   ->  AL            formaliti      ->  formal
    (m>0) IVITI   ->  IVE           sensitiviti    ->  sensitive
    (m>0) BILITI  ->  BLE           sensibiliti    ->  sensible
    """
    word = token
    processed_word = word

    if word[-2] == 'a':
      if word.endswith('ational'):
        base_word = self.getBaseWord(word,'ational')
        if self.measure_count(base_word) > 0:
          processed_word = re.sub(r'ational','ate',word)
      elif word.endswith('tional'):
        base_word = self.getBaseWord(word,'tional')
        if self.measure_count(base_word) > 0:
          processed_word = re.sub(r'tional','tion',word)
    elif word[-2] == 'c':
      if word.endswith('enci'):
        base_word = self.getBaseWord(word,'enci')
        if self.measure_count(base_word) > 0:
          processed_word = re.sub(r'enci','ence',word)
      elif word.endswith('anci'):
        base_word = self.getBaseWord(word,'anci')
        if self.measure_count(base_word) > 0:
          processed_word = re.sub(r'anci','ance',word)
    elif word[-2] == 'z':
      if word.endswith('izer'):
        base_word = self.getBaseWord(word,'izer')
        if self.measure_count(base_word) > 0:
          processed_word = re.sub(r'izer','ize',word)
    elif word[-2] == 'l':
      if word.endswith('abli'):
        base_word = self.getBaseWord(word, 'abli')
        if self.measure_count(base) > 0:
          processed_word = re.sub(r'abli','able',word)
      elif word.endswith('alli'):
        base_word = self.getBaseWord(word,'alli')
        if self.measure_count(base_word) > 0:
          processed_word = re.sub(r'alli','al',word)
      elif word.endswith('entli'):
        base_word = self.getBaseWord(word,'entli')
        if self.measure_count(base_word) > 0:
          processed_word = re.sub(r'entli','ent',word)
      elif word.endswith('eli'):
        base_word = self.getBaseWord(word,'eli')
        if self.measure_count(base_word) > 0:
          processed_word = re.sub(r'eli','e',word)
      elif word.endswith('ousli'):
        base_word = self.getBaseWord(word,'ousli')
        if self.measure_count(base_word) > 0:
          processed_word = re.sub(r'ousli','ous',word)
    elif word[-2] == 'o':
      if word.endswith('ation'):
        base_word = self.getBaseWord(word,'ation')
        if self.measure_count(base_word) > 0:
          processed_word = re.sub(r'ation','ate',word)
      elif word.endswith('ization'):
        base_word = self.getBaseWord(word,'ization')
        if self.measure_count(base_word) > 0:
          processed_word = re.sub(r'ization','ize',word)
      elif word.endswith('ator'):
        base_word = self.getBaseWord(word,'ator')
        if self.measure_count(base_word) > 0:
          processed_word = re.sub(r'ator','ate',word)
    elif word[-2] == 's':
      if word.endswith('alism'):
        base_word = self.getBaseWord(word,'alism')
        if self.measure_count(base_word) > 0:
          processed_word = re.sub(r'alism','al',word)
      elif word.endswith('iveness'):
        base_word = self.getBaseWord(word,'iveness')
        if self.measure_count(base_word) > 0:
          processed_word = re.sub(r'iveness','ive',word)
      elif word.endswith('fulness'):
        base_word = self.getBaseWord(word,'fulness')
        if self.measure_count(base_word) > 0:
          processed_word = re.sub(r'fulness','ful',word)
      elif word.endswith('ousness'):
        base_word = self.getBaseWord(word,'ousness')
        if self.measure_count(base_word) > 0:
          processed_word = re.sub(r'ousness','ous',word)
    elif word[-2] == 't':
      if word.endswith('aliti'):
        base_word = self.getBaseWord(word,'aliti')
        if self.measure_count(base_word) > 0:
          processed_word = re.sub(r'aliti','al',word)
      elif word.endswith('iviti'):
        base_word = self.getBaseWord(word,'iviti')
        if self.measure_count(base_word) > 0:
          processed_word = re.sub(r'iviti','ive',word)
      elif word.endswith('biliti'):
        base_word = self.getBaseWord(word,'biliti')
        if self.measure_count(base_word) > 0:
          processed_word = re.sub(r'biliti','ble',word)

    return processed_word

  # Step 3
  def step_3(self,token):
    """
    (m>0) ICATE ->  IC              triplicate     ->  triplic
    (m>0) ATIVE ->                  formative      ->  form
    (m>0) ALIZE ->  AL              formalize      ->  formal
    (m>0) ICITI ->  IC              electriciti    ->  electric
    (m>0) ICAL  ->  IC              electrical     ->  electric
    (m>0) FUL   ->                  hopeful        ->  hope
    (m>0) NESS  ->                  goodness       ->  good
    """
    word = token
    processed_word = word

    if word.endswith('icate'):
      base_word = self.getBaseWord(word,'icate')
      if self.measure_count(base_word) > 0:
        processed_word = re.sub(r'icate','ic',word)
    elif word.endswith('ative'):
      base_word = self.getBaseWord(word,'ative')
      if self.measure_count(base_word) > 0:
        processed_word = re.sub(r'ative','',word)
    elif word.endswith('alize'):
      base_word = self.getBaseWord(word,'alize')
      if self.measure_count(base_word) > 0:
        processed_word = re.sub(r'alize','al',word)
    elif word.endswith('iciti'):
      base_word = self.getBaseWord(word,'iciti')
      if self.measure_count(base_word) > 0:
        processed_word = re.sub(r'iciti','ic',word)
    elif word.endswith('ical'):
      base_word = self.getBaseWord(word,'ical')
      if self.measure_count(base_word) > 0:
        processed_word = re.sub(r'ical','ic',word)
    elif word.endswith('ful'):
      base_word = self.getBaseWord(word,'ful')
      if self.measure_count(base_word) > 0:
        processed_word = re.sub(r'ful','',word)
    elif word.endswith('ness'):
      base_word = self.getBaseWord(word,'ness')
      if self.measure_count(base_word) > 0:
        processed_word = re.sub(r'ness','',word)
  
    return processed_word

  # Step 4
  def step_4(self,token):
    """
      (m>1) AL    ->                  revival        ->  reviv
      (m>1) ANCE  ->                  allowance      ->  allow
      (m>1) ENCE  ->                  inference      ->  infer
      (m>1) ER    ->                  airliner       ->  airlin
      (m>1) IC    ->                  gyroscopic     ->  gyroscop
      (m>1) ABLE  ->                  adjustable     ->  adjust
      (m>1) IBLE  ->                  defensible     ->  defens
      (m>1) ANT   ->                  irritant       ->  irrit
      (m>1) EMENT ->                  replacement    ->  replac
      (m>1) MENT  ->                  adjustment     ->  adjust
      (m>1) ENT   ->                  dependent      ->  depend
      (m>1 and (*S or *T)) ION ->     adoption       ->  adopt
      (m>1) OU    ->                  homologou      ->  homolog
      (m>1) ISM   ->                  communism      ->  commun
      (m>1) ATE   ->                  activate       ->  activ
      (m>1) ITI   ->                  angulariti     ->  angular
      (m>1) OUS   ->                  homologous     ->  homolog
      (m>1) IVE   ->                  effective      ->  effect
      (m>1) IZE   ->                  bowdlerize     ->  bowdler
    """
    word = token
    processed_word = word
    # In the order of rules above.
    suffixList = ['al','ance', 'ence', 'er', 'ic', 'able', 'ible', 'ant', 'ement', 'ment', 'ent', 'ou', 'ism', 'ate', 'iti', 'ous', 'ive', 'ize' ]
    for suffix in suffixList:
      if word.endswith(suffix):
        base_word = self.getBaseWord(word,suffix)
        if self.measure_count(base_word) > 0:
          processed_word = re.sub(suffix,'',word)
    
    if word.endswith('ion'):
      base_word = self.getBaseWord(word,'ion')
      if self.measure_count(base_word) > 1 and base_word.endswith('s') or base_word.endswith('t'):
        processed_word = re.sub(r'ion','',word)

    return processed_word

  # Step 5a
  def step_5a(self,token):
    """
    (m>1) E     ->                  probate        ->  probat
                                    rate           ->  rate
    (m=1 and not *o) E ->           cease          ->  ceas
    """
    word = token
    processed_word = token
    if word.endswith('e'):
      base_word = self.getBaseWord(word,'e')
      if self.measure_count(base_word) > 1 or (self.measure_count(base_word) == 1 and not self.check_cvc(base_word)):
        processed_word = re.sub(r'e','',word)

    return processed_word

  # Step 5b
  def step_5b(self,token):
    """
    (m > 1 and *d and *L) -> single letter
                                    controll       ->  control
                                    roll           ->  roll
    """
    word = token
    processed_word = word
    if self.double_consonant(word) and word.endswith('l') and self.measure_count(word) > 1:
      processed_word = word[:-1]
    
    return processed_word






  



