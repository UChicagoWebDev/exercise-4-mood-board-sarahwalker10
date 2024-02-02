# Exercise #4: Mood Board

10 points

**DUE: Friday, February 2 by 5:00pm**

### Instructions

![A Screenshot of Pinterest.com from 2010](pinterest_2010.jpg)

For this exercise, we'll put together all the techniques we covered this week to
make an interactive web page to build a collection of images related to a
theme—a [mood board](https://en.wikipedia.org/wiki/Mood_board).

Create a page that starts with an empty board and prompts users to enter a
search query. Use an image search API to fetch images matching that query and
present them to the user. Let users select images from the result set to be
placed on their board (by adding them to the DOM). Keep those images on the
board and allow users to keep running searches and adding more images.

We'll use an image search API from
[Bing](https://docs.microsoft.com/en-us/bing/search-apis/bing-image-search/reference/endpoints).
I'll provide an API key over Slack that you can use by pasting it into
`apikey.example.js` and renaming the file `apikey.js`. You can then use the
BING_API_KEY variable in your javascript code. You'll notice that `apikey.js` is
in the `.gitignore` file; **please do not check the API key into GitHub**.
Even if it's not found by bots run by malicious users, it will likely be found by
Microsoft's own bots and deactivated, breaking your code and everyone else's.

In your search results you'll also find a list of related search terms. Display
those to the user and make them clickable, such that clicking them runs a new
search with the suggested term as the query.

Use your judgment to make a functional and visually appealing page. You may want
to consider using some of the advanced layouts we learned in Week 2 to fit the
control elements, search results, and selected images onto the page in an
attractive way.

Don't worry about saving mood boards once they've been created; this week we'll
embrace ephemerality.

Remember to include in your submission any classmates you collaborated with and
any materials you consulted.

### Rubric

- Use `XMLHTTPRequest` to make an AJAX requests to the image search API (3 points)
    - Include the search term as a url query parameter
    - Include the correct API authorization header
    - Retrieve results in a json format
- Running a search clears previous search results (1 point)
- Use the DOM API to display image results to the user (2 points)
- Use the DOM API to display related concept results to the user (1 point)
- Clicking on a result image adds it to the user's mood board (2 points)
- Clicking on a related concept runs a new search for that concept (1 point)


### Sources
- Aïcha Camara
- https://developer.mozilla.org/en-US/docs/Web/API/Event/target

- https://www.geeksforgeeks.org/how-to-access-variables-from-another-file-using-javascript/

- https://developer.mozilla.org/en-US/play

- https://www.w3schools.com/jsref/met_element_setattribute.asp

- https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute

- https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore

- https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute

- https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector

- https://javascript.info/xmlhttprequest

- https://developer.mozilla.org/en-US/docs/Web/API/Response/json

- https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest

- https://dhis2-app-course.ifi.uio.no/learn/javascript/manipulating-documents/events/add-listener/

- https://stackoverflow.com/questions/55108850/what-is-bings-search-engine-url-for-queries

- https://www.youtube.com/watch?v=oaliV2Dp7WQ

- https://www.youtube.com/watch?v=LeNsDyLkMO4

- https://www.geeksforgeeks.org/how-to-send-an-image-using-ajax/

- https://www.shecodes.io/athena/75384-what-is-console-log-and-how-does-it-work#:~:text=log%20is%20a%20built%2Din,is%20happening%20in%20your%20code.&text=javascript-,console.,%22Hello%2C%20World!%22)%3B

- https://www.w3schools.com/jsref/prop_search_value.asp

- https://stackoverflow.com/questions/72022115/query-and-get-data-from-an-endpoint-through-the-a-search-bar-input-in-javascript

- https://www.w3schools.com/jsref/met_document_queryselector.asp

- https://www.w3schools.com/xml/ajax_xmlhttprequest_send.asp

- https://stackoverflow.com/questions/71379304/clear-search-bar