import { MongoClient } from "mongodb";
import { dbConstants } from "./constants";

declare global {
  var _mongoClientPromise: typeof clientPromise;
}

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise: Promise<MongoClient>;

if (!uri) {
  throw new Error(dbConstants.URI_NOT_FOUND);
}

if (process.env.NODE_ENV === "production") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }

  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
