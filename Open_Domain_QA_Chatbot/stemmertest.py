#!/usr/bin/python3

from Stemmer import Stemmer

stemmer = Stemmer()

print(stemmer.process('caresses'))
print(stemmer.process('cats'))
print(stemmer.process('happy'))
print(stemmer.process('relational'))
print(stemmer.process('digitizer'))

print(stemmer.process('vietnamization'))
print(stemmer.process('operator'))
print(stemmer.process('callousness'))
print(stemmer.process('electrical'))
print(stemmer.process('revival'))
print(stemmer.process('bowdlerize'))
print(stemmer.process('adoption'))
print(stemmer.process('cease'))
print(stemmer.process('rate'))
print(stemmer.process('controll'))
