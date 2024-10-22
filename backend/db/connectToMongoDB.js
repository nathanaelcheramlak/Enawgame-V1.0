import mongoose from "mongoose";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();
const uri = process.env.MONGODB_URI;

const connectToMongoDB = async () => {
  try {
    console.log("Initiating connection to MongoDB ...");
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("C:Error connecting to MongoDB", error.message);
  }
};

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectToMongoDBOriginal() {
  try {
    console.log("Initiating connection to MongoDB ...");
    await client.connect();
    console.log("Connected successfully to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  } finally {
    await client.close();
  }
}

// connectToMongoDB();

export default connectToMongoDB;
