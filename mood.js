
const bing_api_endpoint = "https://api.bing.microsoft.com/v7.0/images/search";
const bing_api_key = BING_API_KEY;

// Clear the search bar before you type a new search
document.querySelector("#search-input").addEventListener("click", (e) => {
  document.getElementById('search-input').value = "";
});

function clearResultsPane() {
  closeResultsPane();
  document.getElementById("suggestedSearches").innerHTML = '';
  document.getElementById("resultsImageContainer").innerHTML = '';
}


function runSearch() {

  // Clear the results pane before you run a new search
  clearResultsPane();


  openResultsPane();
  // Build your query with bing_api_endpoint + search bar input.
  const q = document.getElementById('search-input').value
  var url = `${bing_api_endpoint}?q=${q}`;

  // Construct the request object 
  // i.e. build my order on doordash
  let request = new XMLHttpRequest();
  request.open("GET", url);

  // specify that you want json as your response type
  request.responseType = 'json';
  //add header
  request.setRequestHeader("Ocp-Apim-Subscription-Key", bing_api_key);

  // when the responses come back, handle them in the load function
  request.addEventListener("load", loadFunction);
  
  // send the request
  //i.e. send the order to restaurant from doordash
  request.send();
  return false;  // Keep this; it keeps the browser from sending the event
                  // further up the DOM chain. Here, we don't want to trigger
                  // the default form submission behavior.
}



// handle the responses that you get back from the API
function loadFunction(event) {
  //see results in the console
  console.log(event);

  // if server approves, create elements inside the html file 
  // with the responses you received from API
  if (event.target.status == 200) {
    
    //grab response
    let response = event.target.response;
    console.log(response)

    //handle suggested searches
    let options = document.getElementById("suggestedSearches");
    response.relatedSearches.forEach(item => {
      const newListItem = document.createElement("li");
      const listText = document.createTextNode(item.text);

      newListItem.setAttribute("id", item.webSearchUrl);
      newListItem.setAttribute("text", item.text);
      newListItem.addEventListener("click", chooseSuggested);
      
      newListItem.appendChild(listText);
      options.appendChild(newListItem);
  })


    //place each image result inside the container
    let dropdown = document.getElementById("resultsImageContainer");
    response.value.forEach(item => {
      const newDiv = document.createElement("div");
      newDiv.setAttribute("class", "resultImage");

      let newImg = document.createElement("img");
      newImg.setAttribute("src", item.thumbnailUrl);
      newImg.addEventListener("click", saveImg);

      newDiv.appendChild(newImg);
      dropdown.appendChild(newDiv);

  })
  }

  
};


// add picture to your moodboard from the "click" event listener
function saveImg (clickEvent) {
  let board = document.getElementById("board");

  const newImg = document.createElement("img");
  let imgSrc = clickEvent.target.getAttribute("src");
  newImg.setAttribute("src", imgSrc);

  const newDiv = document.createElement("div");
  newDiv.setAttribute("class", "savedImage");

  newDiv.appendChild(newImg);
  board.appendChild(newDiv);
}


function chooseSuggested (e) {
  newSearch = e.target.getAttribute("text");
  document.getElementById("search-input").value = newSearch;
  runSearch()

}



function openResultsPane() {
  // This will make the results pane visible.
  document.querySelector("#resultsExpander").classList.add("open");
}

function closeResultsPane() {
  // This will make the results pane hidden again.
  document.querySelector("#resultsExpander").classList.remove("open");
}

// This will 
document.querySelector("#runSearchButton").addEventListener("click", runSearch);
document.querySelector(".search input").addEventListener("keypress", (e) => {
  if (e.key == "Enter") {runSearch()}
});

document.querySelector("#closeResultsButton").addEventListener("click", closeResultsPane);
document.querySelector("body").addEventListener("keydown", (e) => {
  if(e.key == "Escape") {closeResultsPane()}
});

