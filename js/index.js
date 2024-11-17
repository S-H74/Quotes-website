// var flag;
var old = 0;
var randomNumber;
function generateQoutes(){
    var collectionOfQuotes = [
        {
            'quote':`“Be yourself; everyone else is already taken.”`,
            'author':`― Oscar Wilde`,
            // flag: false
        },
        {
            'quote':`“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,
            'author':`-- Marilyn Monroe`,
            // flag: false
        },
        {
            'quote':`“It is never too late to be what you might have been.”`,
            'author':`-- George Eliot`,
            // flag: false
        },
        {
            'quote':`“If you only read the books that everyone else is reading, you can only think what everyone else is thinking.”`,
            'author':`-- Haruki Murakami, Norwegian Wood`,
            // flag: false
        },
        {
            'quote':`“Love is that condition in which the happiness of another person is essential to your own.”`,
            'author':`-- Robert A. Heinlein, Stranger in a Strange Land`,
            // flag: false
        },
        {
            'quote':`“Everything you can imagine is real.”`,
            'author':`--Pablo Picasso`,
            // flag: false
        },
        {
            'quote':`“Life isn't about finding yourself. Life is about creating yourself.”`,
            'author':`-- George Bernard Shaw`,
            // flag: false
        },
        {
            'quote':`“Success is not final, failure is not fatal: it is the courage to continue that counts.”`,
            'author':`-- Winston S. Churchill`,
            // flag: false
        }
    ]
    // console.log(collectionOfQuotes);
    do{
        // randomNumber = Math.floor(Math.random() *8) + 1;
        randomNumber = Math.floor(Math.random() *collectionOfQuotes.length);
    }while( old === randomNumber);
    console.log(collectionOfQuotes[randomNumber]);
    document.getElementById("title-author").innerHTML = collectionOfQuotes[randomNumber].quote;
    document.getElementById("author").innerHTML = collectionOfQuotes[randomNumber].author;
    old =randomNumber;
}