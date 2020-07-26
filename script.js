const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

const ApiQuoteCategories = ['management', 'sports', 'life', 'funny',];
let accessArrayIndexCounter = 0;

function showLoadingSpinner() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

function hideLoadingSpinner() {
    if (!loader.hidden) {
        loader.hidden = true;
        quoteContainer.hidden = false;
    }
}


async function getApiQuote(category='inspire') {
    showLoadingSpinner();
    const apiUrl = `https://quotes.rest/qod.json?category=${category}`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        quoteText.innerText = data.contents.quotes[0].quote;
        authorText.innerText = data.contents.quotes[0].author;
        const quoteImage = data.contents.quotes[0].background;
        quoteContainer.style.backgroundImage = `url(${quoteImage})`
    } catch (error) {
        console.log(error)
    }
    hideLoadingSpinner();
}


newQuoteBtn.addEventListener('click', ()=> {
    getApiQuote(ApiQuoteCategories[accessArrayIndexCounter]);
    accessArrayIndexCounter += 1;
    if (accessArrayIndexCounter > 4) {
        accessArrayIndexCounter = 0;
    }
    console.log(accessArrayIndexCounter)
});


getApiQuote();

