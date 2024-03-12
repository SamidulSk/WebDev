// Define a list of book objects with title, author, and year  
// Function to extract titles from a list of books and call the callback
// Define a list of book objects with title, author, and year
const books = [
    { title: "first book", author: "Salinger", year: 1955 },
    { title: "second book", author: "gustin", year: 1969 },
    { title: "Third book", author: "tom", year: 1939 },
    { title: "fourth book", author: " Lee", year: 1810 },
];

function extractTitlesAndLog(books, callback) {
    const titles = books.map(book => book.title); 
    callback(titles);
}
function logTitlesInAlphabeticalOrder(titles) {
    titles.sort();  
    titles.forEach(title => {
        console.log(title);
    });
}

extractTitlesAndLog(books, logTitlesInAlphabeticalOrder);
