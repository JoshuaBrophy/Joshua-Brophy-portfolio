const {MongoClient} = require ("mongodb");
const uri = "mongodb+srv://joshuabrophy:Thegooseisloose1995@thebeardedcluster.vg9m207.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function createConnection() {
    try{
        await client.connect();
        console.log('connected to the database')
    }   catch (error) {
        console.error('Error connecting to the database')
    }
}

async function createCollection() {
    try {
        const db = client.db('vehicles');
        await db.createCollection('trucks');
        console.log('created collection: trucks')
    }   catch (error) {
        console.error('error creating collection', error);
    }   finally {
        client.close();
    }
}
createConnection();
createCollection();