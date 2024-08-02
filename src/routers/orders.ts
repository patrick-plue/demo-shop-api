import { Router } from 'express';
import { validate } from '../middlewares/validate';
import { orderSchema } from '../zod/schemas';
import {
    getOrders,
    getOrderById,
    createOrder,
    updateOrderById,
    deleteOrderById,
} from '../controllers/order';

const orderRouter = Router();

orderRouter.route('/').get(getOrders).post(validate(orderSchema), createOrder);

orderRouter
    .route('/:id')
    .get(getOrderById)
    .put(validate(orderSchema), updateOrderById)
    .delete(deleteOrderById);

export default orderRouter;
