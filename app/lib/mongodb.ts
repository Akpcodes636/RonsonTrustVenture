// lib/mongodb.ts
import { MongoClient } from 'mongodb';

// Augment the NodeJS global type to include _mongoClientPromise
declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

const uri = process.env.MONGODB_URI!;
const options = {};

let client: MongoClient;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}

const clientPromise = global._mongoClientPromise;

export async function connectToDatabase() {
  const client = await clientPromise!;
  const db = client.db('yourDatabaseName'); // replace with your DB name
  return { client, db };
}
