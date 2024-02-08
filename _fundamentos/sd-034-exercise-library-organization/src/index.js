const { books } = require('../data/library');

// Requisito 1
const fantasyOrScienceFiction = () => {
  const filteredBooks = books.filter((book) =>
    book.genre === 'Ficção Científica' || book.genre === 'Fantasia');

  return filteredBooks;
};
// console.log(fantasyOrScienceFiction());

// Requisito 2
const oldBooksOrdered = (ano) => {
  const booksAge = books.filter((book) => {
    const { releaseYear } = book;
    const ordered = ano - releaseYear;
    return ordered >= 60;
  });

  const oldBooks = booksAge.sort((a, b) => a.releaseYear - b.releaseYear);
  return oldBooks;
};
// console.log(oldBooksOrdered(2020));

// Requisito 3
const booksByAuthorBirthYear = (birthYear) => {
  // escreva seu código aqui
};

// Requisito 4
const fantasyOrScienceFictionAuthors = () => {
  const filteredBooks = books.filter((book) => (book.genre === 'Ficção Científica' || book.genre === 'Fantasia'))
  }
  // const { author: { name } } = book;

  return filteredBooks;
;
console.log(fantasyOrScienceFictionAuthors());

// Requisito 5
const oldBooks = (year) => {
  // escreva seu código aqui comit
};

// Requisito 6
const authorWith3DotsOnName = () => {
  // escreva seu código aqui
};

module.exports = {
  fantasyOrScienceFiction,
  oldBooksOrdered,
  booksByAuthorBirthYear,
  fantasyOrScienceFictionAuthors,
  oldBooks,
  authorWith3DotsOnName,
};
