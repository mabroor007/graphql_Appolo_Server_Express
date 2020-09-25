const express = require("express");
const { verify } = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolvers");

// app
const app = express();
// Cookie Parser middleware
app.use(cookieParser());

// Graphql server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  tracing: true,
  context: ({ req, res }) => {
    let userData;
    try {
      let token = req.cookies.jwt;
      userData = verify(token, "JLDSKJFIWEOFJDKNFSHDWOIADJK");
    } catch {}
    return { userData, req, res };
  },
});

// Applying Graphql middleware
server.applyMiddleware({ app });

app.listen(4000, () => {
  console.log("Listening on port 4000...");
});
