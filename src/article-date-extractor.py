# Simple stdin/stdout I/O to article-date-extractor utility.

import sys, json, articleDateExtractor

def read_in():
    '''
    Reads data in from stdin.
    '''

    readIn = sys.stdin.read()
    
    return readIn

def main():
    # Read from stdin
    readIn = read_in()
    
    # Parse into JSON
    data = json.loads(readIn)

    if ("url" not in data or
        "html" not in data):
        print("None")
        return

    url = data["url"]
    html = data["html"]

    # TODO: Temporarily re-route stdout until d is obtained and update JS reader
    d = articleDateExtractor.extractArticlePublishedDate(url, html)

    print (d)

# Start process
if __name__ == '__main__':
    main()