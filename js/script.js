/******************************************
 * `quotes` array
 * Array containing quote objects with properties like `quote`, `source`, `citation`, and `year`.
 ******************************************/
const quotes = [
  {
    quote: "Believe you can and you're halfway there.",
    source: "Theodore Roosevelt",
    year: 1904
  },
  {
    quote: "The only limit to our realization of tomorrow will be our doubts of today.",
    source: "Franklin D. Roosevelt",
    year: 1940
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    source: "Eleanor Roosevelt",
    year: 1940
  },
  {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    source: "Winston Churchill",
    year: 1947
  },
  {
    quote: "You are never too old to set another goal or to dream a new dream.",
    source: "C.S. Lewis",
    year: 1963
  }
];

/***
 * `getRandomQuote` function
 * Generates a random index and returns a random quote object from the `quotes` array.
 ***/
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length); // Generate a random index
  return quotes[randomIndex]; // Return a random quote object
}

/***
 * `printQuote` function
 * Constructs an HTML string with a random quote and updates the `quote-box` element with it.
 ***/
function printQuote() {
  // 1. Create a variable that calls the getRandomQuote() function
  const randomQuote = getRandomQuote();

  // 2. Create a variable that initiates your HTML string with
  // the first two <p></p> elements, their classNames,
  // and the quote and source properties, but leave off
  // the second closing `</p>` tag for now
  let html = `
    <p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}`;

  // 3. Use an if statement to check if the citation property
  // exists, and if it does, concatenate a <span></span>
  // element, appropriate className, and citation property
  // to the HTML string
  if (randomQuote.citation) {
    html += `<span class="citation">${randomQuote.citation}</span>`;
  }

  // 4. Use an if statement to check if the year property exists,
  // and if it does, concatenate a <span></span> element,
  // appropriate className, and year property to the HTML
  // string
  if (randomQuote.year) {
    html += `<span class="year">${randomQuote.year}</span>`;
  }

  // 5. After the two if statements, concatenate the closing </p>
  // tag to the HTML string
  html += `</p>`;

  // 6. Set the innerHTML of the quote-box div to equal the
  // complete HTML string
  document.getElementById('quote-box').innerHTML = html;
}


/***
 * click event listener for the print quote button
 * Calls the `printQuote` function when the "Show another quote" button is clicked.
 ***/
document.getElementById('load-quote').addEventListener('click', printQuote);

// Initial load of a random quote when the page loads
printQuote();
