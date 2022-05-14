const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./Schema/TypeDefs");
const { resolvers } = require("./Schema/Resolvers");
const express = require("express");
const app = express();

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });
server.start().then(() => {
  server.applyMiddleware({ app });
});

app.listen({ port: 3001 }, () => {
  console.log("server running on port 3001");
});
