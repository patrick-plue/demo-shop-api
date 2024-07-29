import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'));

/* PATHS - CRUD

/users
/categories
/products
/orders

*/

export default app;
