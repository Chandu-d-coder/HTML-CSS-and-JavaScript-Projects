// Define the API endpoint for fetching random quotes
const API = "https://api.quotable.io/random";

// Get references to HTML elements
const randomQuote = document.getElementById("random-quote");
const author = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote-btn");
const tweetBtn = document.getElementById("tweet-btn");

// Function to fetch a random quote from the API
async function randomGenerator() {
  // Fetch data from the API
  const response = await fetch(API);
  const data = await response.json();

  // Update the HTML elements with the fetched quote and its author
  randomQuote.innerHTML = data.content;
  author.innerHTML = data.author;

  // Log the quote and its author to the console
  console.log(data.content);
  console.log(data.author);
}

// Load a random quote when the page loads
randomGenerator();

// Event listener for the "New Quote" button to fetch and display a new quote
newQuoteBtn.addEventListener("click", () => {
  randomGenerator();
});

// Function to open a Twitter window for sharing the current quote
function tweet() {
  window.open(
    // Construct the tweet content with the quote and its author
    "https://twitter.com/intent/tweet?text=" + randomQuote.innerHTML + " --- by " + author.innerHTML,
    // Set properties for the tweet window
    "Tweet Window",
    "width = 700 , height = 300"
  );
}

// Event listener for the "Tweet" button to share the current quote on Twitter
tweetBtn.addEventListener("click", () => {
  tweet();
});
