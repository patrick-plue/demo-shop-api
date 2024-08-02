import { Router } from 'express';
import { validate } from '../middlewares/validate';
import { orderSchema } from '../zod/schemas';

const orderRouter = Router();

orderRouter.route('/').get(getOrders).post(validate(orderSchema), createOrder);

orderRouter
    .route('/:id')
    .get(getOrder)
    .put(validate(orderSchema), updateOrder)
    .delete(deleteOrder);

export default orderRouter;
