import express from 'express';
import cors from 'cors';

import userRouter from './routers/users';
import orderRouter from './routers/orders';
import productRouter from './routers/products';
import categoryRouter from './routers/categories';

const app = express();
app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/users', userRouter);
app.use('/orders', orderRouter);
app.use('/products', productRouter);
app.use('/categories', categoryRouter);

export default app;
