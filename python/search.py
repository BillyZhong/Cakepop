import sys
from pygoogle import pygoogle


def makeString(cmdArguments):
	searchString = ""
	counter  = 0
	for word in cmdArguments:
		if counter != 0:
			searchString += str(word) + " "
		counter += 1
	return searchString

def getLinks(searchString):
	g = pygoogle(searchString)
	g.pages = 1
	g.get_urls()
	links = g.get_urls()
	return links

def findLinks():
	searchString = makeString(sys.argv)
	return getLinks(searchString)

def printLinks(links):
	for link in links:
		print link

inputString = makeString(sys.argv)
links = getLinks(inputString)
printLinks(links)

