import { ApolloServer } from "apollo-server";
import { readFileSync } from "fs";
import mongoose from "mongoose";
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

// Create mongodb connection
const connectDB = async () => {
  const DB_URI = process.env.DATABASE as string;
  try {
    await mongoose.connect(DB_URI);
    console.log("connected to Database");
  } catch (error: any) {
    console.log(error.message);
    // retry connection after 5 seconds
    setTimeout(connectDB, 5000);
  }
};
