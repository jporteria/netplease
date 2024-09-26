const MongoClient = require('mongodb').MongoClient;
require('dotenv').config()

// MongoDB connection URL with authentication options
const url = process.env.DB_URL
const dbName = process.env.DB_NAME


let dbInstance = null;

async function connectToDatabase() {
    if (dbInstance){
        return dbInstance
    };

    const client = new MongoClient(url);

    await client.connect()
    dbInstance = client.db(dbName);

    return dbInstance;
}

module.exports = connectToDatabase;