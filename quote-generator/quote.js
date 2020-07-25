const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

const quoteCategories = ['management', 'sports', 'life', 'funny',];
let counter = 0;


async function getQuote(category='inspire') {
    //const apiUrl = 'http://quotes.rest/qod.json';
    const apiUrl = `http://quotes.rest/qod.json?category=${category}`;
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
}

getQuote()

newQuoteBtn.addEventListener('click', ()=> {
    getQuote(quoteCategories[counter]);
    counter = counter + 1;
    if (counter > 4) {
        counter = 0;
    }
    console.log(counter)
});



