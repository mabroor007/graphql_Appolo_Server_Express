const { gql } = require("apollo-server-express");

exports.typeDefs = gql`
  type Book {
    name: String!
    pages: Int!
  }
  type Query {
    hello(name: String): String!
    getAllBooks: [Book]!
  }
  type Mutation {
    addBook(name: String!, pages: Int!): Book!
    removeBook(name: String!): String!
    updateBook(name: String!, pages: Int!): [Book]!
    login(userName: String!, password: String!): String!
    signUpUser(userName: String!, email: String!, password: String!): String!
    logOutUser: String!
  }
`;
