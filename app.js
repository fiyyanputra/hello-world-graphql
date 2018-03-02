var express = require("express"),
    makeExecutableSchema = require("graphql-tools").makeExecutableSchema,
    graphqlExpress = require("apollo-server-express").graphqlExpress,
    app = express();

var typeDefs = `
type Query{
  hello: String
  name: String
}`;

var resolvers = {
  Query: {
    hello() {
      return "hello world";
    },
    name() { 
        return "github/fiyyanputra";
    }
  }
};

var schema = makeExecutableSchema({ typeDefs: typeDefs, resolvers: resolvers });

app.use("/graphql", graphqlExpress({schema: schema}));

app.listen(3000, () => console.log("app jalan pada http://localhost:3000"));