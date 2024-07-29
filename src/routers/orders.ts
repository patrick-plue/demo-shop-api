import { Router } from 'express';

const orderRouter = Router();

orderRouter.route('/').get(getOrders).post(createOrder);

orderRouter.route('/:id').get(getOrder).put(updateOrder).delete(deleteOrder);

export default orderRouter;
