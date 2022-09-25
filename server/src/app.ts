import { ApolloServer } from "apollo-server";
import { readFileSync } from "fs";
import { resolvers } from "./resolvers";
// Create graphql server

const connectGql = async () => {
  const typeDefs = readFileSync("./src/schema.graphql", { encoding: "utf-8" });
  const server = new ApolloServer({
    typeDefs,
    resolvers: resolvers,
  });
  try {
    await server.listen(5000);
    console.log("graphql server started");
  } catch (error: any) {
    console.log(error.message);
  }
};
