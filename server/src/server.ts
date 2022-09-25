import { connectDB, connectGql } from "./app";
import dotenv from "dotenv";
dotenv.config();
connectDB();
connectGql();
