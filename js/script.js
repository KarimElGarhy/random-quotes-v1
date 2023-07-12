var quoteText = document.getElementById("quote");
var quoteAuthor = document.getElementById("author");
var authorImg = document.getElementById("authorImg");

var quotes =[
    {
        quote: "Be yourself; everyone else is already taken.",
        name: "Oscar Wilde",
        imgQuote: "imgs/oscarwilde.jpg"
    },
    {
        quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        name: "Marilyn Monroe",
        imgQuote: "imgs/marilynmonroe.jpg"
    },
    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        name: "Albert Einstein",
        imgQuote: "imgs/alberteinstin.jpg"
    }, 
    {
        quote: "So many books, so little time.",
        name: "Frank Zappa",
        imgQuote: "imgs/frankzappa.jpg"
    }, 
    {
        quote: "A room without books is like a body without a soul.",
        name: "Marcus Tullius Cicero",
        imgQuote: "imgs/marcus.jpg"
    }, 
    {
        quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        name: "Dr. Seuss",
        imgQuote: "imgs/seuss.jpg"
    }, 
    {
        quote: "You only live once, but if you do it right, once is enough",
        name: "Mae West",
        imgQuote: "imgs/maewest.jpg"
    }, 
    {
        quote: "Be the change that you wish to see in the world.",
        name: "Mahatma Gandhi",
        imgQuote: "imgs/mahatmagandhi.jpg"
    }, 
    {
        quote: "In three words I can sum up everything I've learned about life: it goes on.",
        name: "Robert Frost",
        imgQuote: "imgs/robertfrost.jpg"
    }, 
    {
        quote: "f you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
        name: "J.K. Rowling, Harry Potter and the Goblet of Fire",
        imgQuote: "imgs/rowling.jpg"
    }, 
    {
        quote: `Don’t walk in front of me… I may not follow
        Don’t walk behind me… I may not lead
        Walk beside me… just be my friend`,
        name: "Albert Camus",
        imgQuote: "imgs/albertcamus.jpg"
    }
]
var randomNumbers =[0];
function randomQuotes(){
    var quotesNumber = quotes.length;
    var x = Math.floor(Math.random()*quotesNumber);
    if(randomNumbers[randomNumbers.length-1 ] != x){
        randomNumbers.push(x);
    }
    else{
        randomQuotes();
    }
    if(randomNumbers.length>5){
        randomNumbers.shift();
    }
    return randomNumbers[randomNumbers.length-1]
}
function changeQuote(){
    var currentQuote = randomQuotes();
    quoteText.innerHTML = `" ${quotes[currentQuote].quote} "`;
    quoteAuthor.innerHTML =quotes[currentQuote].name;
    authorImg.src = quotes[currentQuote].imgQuote;
}