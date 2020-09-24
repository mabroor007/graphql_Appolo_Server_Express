const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolvers");

// app
const app = express();

// Graphql server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  tracing:true
});

// Applying Graphql middleware
server.applyMiddleware({ app });

app.listen(4000, () => {
  console.log("Listening on port 4000...");
});
