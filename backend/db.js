const MongoClient = require('mongodb').MongoClient;

// MongoDB connection URL with authentication options
const url = 'mongodb+srv://wagako:wagako@cluster0.yeyyahe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'


let dbInstance = null;
const dbName = "netpleaseUser";

async function connectToDatabase() {
    if (dbInstance){
        return dbInstance
    };

    const client = new MongoClient(url);

    await client.connect();
    dbInstance = client.db(dbName);
    return dbInstance;
}

module.exports = connectToDatabase;