import requests
from bs4 import BeautifulSoup
# url = "https://codewithharry.com/"
url = "https://stance.com/"

# STEP1 get the html
req = requests.get(url)
# print (req) # > success code 200 
# print(type(req)) #<class 'requests.models.Response'>
# exit() #exiting the code just to check the response

htmlcontent = req.content
# print (htmlcontent) # >html code in a shabby format
# print(type(htmlcontent)) # <class 'bytes'>

#===========================
# STEP2 parsing the HTML
soup = BeautifulSoup(htmlcontent,'html.parser')
# print (soup)
# print(type(soup)) # <class 'bs4.BeautifulSoup'>

# print(soup.prettify()) 
# print(type(soup.prettify())) # <class 'str'>

#============================
#STEP3 Tree traversal

#accessing the single elements
# print(soup.title) #> first title
# print(type(soup.title)) #> type : <class 'bs4.element.Tag'>

# print(soup.title.string) # returns a string
# print(type(soup.title.string)) # <class 'bs4.element.NavigableString'>

# print(soup.a) #first anchor tag
# print(soup.a.string) #returns a string

# print(soup.span)# > first span
# print(soup.div.prettify()) #first div-prettified


#accessing all elements of a particular type"
# print(soup.find_all('a')) #all paras shown
# print(type(soup.find_all('a'))) #<class 'bs4.element.ResultSet'>

# accessing the first element in the HTML PAGE
# print(soup.find('p')) #same 
# print (soup.p) #same

# ACCESSING CLASS BY ELEMENTS
# print(soup.find('p')['class']) #same
# print (soup.p['class']) #same

# ACCESSING all ELEMENTS BY CLASS NAME
# print(soup.find_all('p',class_ = "text-sm")) 

#ACCESSING TEXT FROM TAGS/SOUP
# print (soup.find('p').get_text()) 
# print (soup.get_text())
# print (type(soup.get_text())) # <class 'str'>


#GETTING LINKS INSIDE ANCHORS
anchors = soup.find_all('a')
# print (anchors)

all_links = set()
for link in anchors :
    if (link.get("href")!= "#"): # text inside href should not be a pound then only consider that link, else dont !
        # print (link)
        # print (link.get("href"))
        linktext = "https://codewithharry.com" + link.get("href")
        all_links.add(linktext)
        # print (linktext)

# print (all_links)

#ACCESSING THE COMMENTS
markup = "<p><!--This is a comment--></p>"
# soup2 = BeautifulSoup(markup)
# print(soup2)
# print (soup2.p)
# print (soup2.p.string)
# print (type(soup2.p.string)) # <class 'bs4.element.Comment'>


#ITERATING THROUGH ELEMENTS
navbar = soup.find(id= "header-nav")
# print(type(navbar.contents)) #returns a list
# print(type(navbar.children)) #returns a generator/iterator

# for i in navbar.contents: #same
#     print (i)
# for i in navbar.children: #same
#     print (i)
# for i in navbar.strings: #shows strings only
#     print (i)
# for i in navbar.stripped_strings: #shows stripped strings only
#     print (i)


# print(navbar.parent)
# print(navbar.parents) # <generator object PageElement.parents at 0x000000EA87A92C00> lets iterate
# for i in navbar.parents:
#     print (i)
# for i in navbar.parents:
    # print (i.name) #prints name only (tree structure is shown for parents)

# print(navbar.next_sibling.next_sibling) #first next_sibling is space hence blank returned
# print(navbar.previous_sibling.previous_sibling.previous_sibling.previous_sibling.previous_sibling.previous_sibling) #first next_sibling is space hence blank returned


#CSS SELECTOR hash (#) is ID and dot(.) is class
elem = soup.select("#smsFooterModal") 
print (elem)