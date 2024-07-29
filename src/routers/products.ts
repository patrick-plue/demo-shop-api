import { Router } from 'express';

const productRouter = Router();

productRouter.route('/').get(getProducts).post(createProduct);

productRouter
    .route('/:id')
    .get(getProduct)
    .put(updateProduct)
    .delete(deleteProduct);

export default productRouter;
