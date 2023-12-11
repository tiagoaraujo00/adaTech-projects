class Livro {
  constructor(title, author, publicationDate) {
    this.title = title;
    this.author = author;
    this.publicationDate = publicationDate;
  }
}

let book1 = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1954);
let book2 = new Livro("Harry Potter e a Pedra Filosofal", "J.K. Rowling", 1997);
let book3 = new Livro("1984", "George Orwell", 1949);

console.log("Livro 1:");
console.log("Título:", book1.title);
console.log("Autor:", book1.author);
console.log("Ano de Publicação:", book1.publicationDate);

console.log("Livro 2:");
console.log("Título:", book2.title);
console.log("Autor:", book2.author);
console.log("Ano de Publicação:", book2.publicationDate);

console.log("Livro 3:");
console.log("Título:", book3.title);
console.log("Autor:", book3.author);
console.log("Ano de Publicação:", book3.publicationDate);
