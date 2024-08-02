import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import { Request, Response } from 'express';

import userRouter from './routers/users';
import orderRouter from './routers/orders';
import productRouter from './routers/products';
import categoryRouter from './routers/categories';
import { errorHandler } from './middlewares/errorHandler';

const app = express();
app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(express.json());
app.use(helmet());
app.use(morgan('dev'));

app.get('/', (req: Request, res: Response) => res.send('Hello World!'));

// app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);
app.use('/api/products', productRouter);
app.use('/api/categories', categoryRouter);
app.use('*', (req, res) => res.sendStatus(404));
app.use(errorHandler);

export default app;
