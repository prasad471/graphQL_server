const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: String!
    firstName: String!
    email: String!
    lastName: String!
    votes: Int!
  }

  # Queries
  type Query {
    getAllUsers: [User!]!
  }

  #Mutations
  type Mutation {
    createUser(firstName: String!, lastName: String!, email: String!): User!
    updateUser(id: String!, votes: Int!): User!
  }
`;
module.exports = { typeDefs };
