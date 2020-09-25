const express = require("express");
const mongoose = require("mongoose");
const { verify } = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolvers");

// Database connection through mongoose
mongoose.connect(
  "mongodb://127.0.0.1:27017/gqlauth",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("Database up and running...")
);

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
      // token check
      let token = req.cookies.jwt;
      userData = verify(token, "JLDSKJFIWEOFJDKNFSHDWOIADJK");
    } catch {}
    // setting userData inside context
    return { userData, req, res };
  },
});

// Applying Graphql middleware
server.applyMiddleware({ app });

app.listen(4000, () => {
  console.log("Listening on port 4000...");
});
