const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

const totlaCategories = booksByCategory.length;

console.log(totlaCategories);
for (let category of booksByCategory) {
    console.log("total de livros da categoria: ", category.category); 
    
}
console.log(category.books.length);

function countAuthors() {
    let authors = [];
    for (let category of booksByCategory) {
        for (let books of category.books) {
            if(authors.indexOf(books.author)== -1){
                authors.push(books.author)
            }
        }
    }
    console.log("Total de Autores: ", authors.length)
}

countAuthors();