//Declaring Variables

let quote = document.querySelector('.quote');
let author = document.querySelector('.author');
let quoteBtn = document.querySelector('#newquote');

const quotes = [
  {
    quote: `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle.
 But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,
    author: `Marilyn Monroe`,
  },
  {
    quote: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
    author: `Albert Einstein`,
  },
  {
    quote: `“So many books, so little time.”`,
    author: `Frank Zappa`,
  },
  {
    quote: `“A room without books is like a body without a soul.”`,
    author: `Marcus Tullius Cicero`,
  },
  {
    quote: `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`,
    author: `Dr. Seuss`,
  },
  {
    quote: `“You only live once, but if you do it right, once is enough.”`,
    author: `Mae West`,
  },
  {
    quote: `“In three words I can sum up everything I've learned about life: it goes on.”`,
    author: `Robert Frost`,
  },
  {
    quote: `“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”`,
    author: `J.K. Rowling, Harry Potter and the Goblet of Fire`,
  },
  {
    quote: `“Don't walk in front of me… I may not follow
    Don't walk behind me… I may not lead
    Walk beside me… just be my friend”`,
    author: `Albert Camus`,
  },
  {
    quote: `“Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .”`,
    author: `C.S. Lewis, The Four Loves`,
  },
];

quoteBtn.addEventListener('click', function () {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  author.innerText = quotes[random].author;
});
