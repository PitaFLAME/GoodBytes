import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../components/data/db';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { email, type } = req.query;

    if (!email || typeof email !== 'string') {
        res.status(400).json({ error: 'Email is required' });
        return;
    }

    const db = await connectToDatabase();
    if (!db) {
        res.status(500).json({ error: 'Failed to connect to the database' });
        return;
    }

    const customer = await db.collection('users').findOne({ email });

    if (type === 'favorites') {
        res.status(200).json({ data: customer ? customer.favorites : [] });
    } else if (type === 'recents') {
        res.status(200).json({ data: customer ? customer.recents : [] });
    } else {
        res.status(400).json({ error: 'Invalid type' });
    }
};

export default handler;