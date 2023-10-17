// list of books
const books = [
    {
        name: "math",
        author: "dr.shivnath ghosh",
        publication:2015,
    },
    {
        name: "physics",
        author: "mr.gangopadya",
        publication:2005,
    },
    {
        name: "chemistry",
        author: "sd upadhya",
        publication:2022,
    },
];

const filterbooks=books.filter((b)=>{
    return b.publication >= 2010;
})
const result=filterbooks.map((book)=>{
    return {
        ...book,
        author: book.author.toUpperCase(),
    };
})
console.log(result)