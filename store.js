let books = [
  {
    name: "Harry poter",
    pages: 400,
  },
  {
    name: "Age of ultron",
    pages: 500,
  },
  {
    name: "Endgame",
    pages: 1000,
  },
];

exports.addBook = (name, pages) => {
  books.push({ name, pages });
  return { name, pages };
};
exports.removeBook = (name) => {
  books = books.filter((book) => book.name !== name);
  return "Deleted";
};
exports.findBook = (name) => {
  return books.find((book) => book.name === name);
};
exports.getAllBooks = () => {
  return books;
};
exports.updateBook = (name, inBook) => {
  const newBooks = [];
  books.forEach((book) => {
    if (book.name !== name) {
      newBooks.push(book);
    } else if (book.name === name) {
      newBooks.push(inBook);
    }
  });
  books = newBooks;
  return books;
};
