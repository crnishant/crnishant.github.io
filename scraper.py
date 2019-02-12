from bs4 import BeautifulSoup
import requests

source = requests.get('https://www.wsj.com').text

soup = BeautifulSoup(source, 'lxml')
articleTitle = soup.find(class_ = 'wsj-headline-link').text
print(articleTitle)