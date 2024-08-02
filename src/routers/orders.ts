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
import { checkIfOrderExists } from '../middlewares/checkIfExits';

const orderRouter = Router();

orderRouter.route('/').get(getOrders).post(validate(orderSchema), createOrder);

orderRouter
    .route('/:id')
    .get(checkIfOrderExists, getOrderById)
    .put(checkIfOrderExists, validate(orderSchema), updateOrderById)
    .delete(checkIfOrderExists, deleteOrderById);

export default orderRouter;
