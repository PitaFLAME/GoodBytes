import { MongoClient } from 'mongodb';


const uri = 'MONGO_DB_URI';
const client = new MongoClient(uri);

export const connectToDatabase = async () => {
    try {
        await client.connect();

        await client.db("admin").command({ ping: 1 });
        console.log('Connected to MongoDB');

        return client.db('GoodBytes0');

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);

    } finally {
        await client.close();
    }
};

connectToDatabase();