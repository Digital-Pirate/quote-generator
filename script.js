// lets start new this is going to be fun
// Get Quotes From API
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const quoteContainer = document.getElementById("quote-container");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

function newQuote() {
  let quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  if (!quote.author) {
    authorText.textContent = "Anonymous";
  } else {
    authorText.textContent = quote.author;
    // authorText.textContent =
  }
  quoteText.textContent = quote.text;
}

// addEventListener.btn
// btn.addEventListener("click", function () {
//   bill.textContent = "lets";
// });

let apiQuotes = [];
async function getQuotes() {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    //Catch Error
  }
}

getQuotes();
// newQuote();
