const store = require("./store");

exports.resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name}`,
    getAllBooks: () => {
      return store.getAllBooks();
    },
  },
  Mutation: {
    addBook: (_, { name, pages }) => store.addBook(name, pages),
    removeBook: (_, { name }) => store.removeBook(name),
    updateBook: (_, { name, pages }) => store.updateBook(name, { name, pages }),
  },
};
