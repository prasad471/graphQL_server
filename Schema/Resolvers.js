const { users } = require("../FakeData");

const resolvers = {
  Query: {
    getAllUsers() {
      return users;
    },
  },

  Mutation: {
    createUser(parent, args) {
      const newUser = args;
      const d = new Date();
      newUser.id = `${d.getTime()}`;
      newUser.votes = 0;
      users.push(newUser);
      return newUser;
    },
    updateUser(parent, args) {
      const { id, votes } = args;
      const userIndex = users.findIndex((ele) => ele.id == id);
      users[userIndex].votes = votes;
      return users[userIndex];
    },
  },
};

module.exports = { resolvers };
