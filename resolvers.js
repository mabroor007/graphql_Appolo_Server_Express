const store = require("./store");
const auth = require("./auth");

exports.resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name}`,
    getAllBooks: () => {
      return store.getAllBooks();
    },
  },
  Mutation: {
    addBook: (_, { name, pages }, { userData }) => {
      return store.addBook(name, pages, userData);
    },
    removeBook: (_, { name }) => store.removeBook(name),
    updateBook: (_, { name, pages }) => store.updateBook(name, { name, pages }),
    login: (_, user, { res }) => auth.loginUser(user, res),
    signUpUser: (_, user, { res }) => auth.signUpUser(user, res),
    logOutUser: (_, __, { res }) => auth.logOutUser(res),
  },
};
