import { Router } from 'express';
import { validate } from '../middlewares/validate';
import { productSchema } from '../zod/schemas';

const productRouter = Router();

productRouter
    .route('/')
    .get(getProducts)
    .post(validate(productSchema), createProduct);

productRouter
    .route('/:id')
    .get(getProduct)
    .put(validate(productSchema), updateProduct)
    .delete(deleteProduct);

export default productRouter;
