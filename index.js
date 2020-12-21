const { ApolloServer, gql } = require("apollo-server");
const { importSchema } = require("graphql-import");
const resolvers = require("./resolvers"); // Colocando o diretório o index será chamado automaticamente

const server = new ApolloServer({
  typeDefs: importSchema("./schema/index.graphql"),
  resolvers: resolvers,
  cors: true,
});

server.listen().then(({ url }) => console.log(`Servidor online ... ${url}`));
