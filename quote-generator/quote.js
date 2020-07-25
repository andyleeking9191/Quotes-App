const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');


async function getQuote() {
    const apiUrl = 'http://quotes.rest/qod.json';
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        quoteText.innerText = data.contents.quotes[0].quote;
        authorText.innerText = data.contents.quotes[0].author;
    } catch (error) {
        console.log(error)
    }
}

getQuote()
