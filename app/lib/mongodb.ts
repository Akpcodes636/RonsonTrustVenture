// lib/mongodb.ts
import { MongoClient } from 'mongodb';

// eslint-disable-next-line @typescript-eslint/no-namespace
declare global {
  namespace NodeJS {
    interface GlobalThis {
      _mongoClientPromise?: Promise<MongoClient>;
    }
  }
}


const uri = process.env.MONGODB_URI!;
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;


if (!(globalThis as NodeJS.GlobalThis)._mongoClientPromise) {
  client = new MongoClient(uri, options);
  (globalThis as NodeJS.GlobalThis)._mongoClientPromise = client.connect();
}
clientPromise = (globalThis as NodeJS.GlobalThis)._mongoClientPromise!;

export async function connectToDatabase() {
  const client = await clientPromise;
  const db = client.db('yourDatabaseName');
  return { client, db };
}
