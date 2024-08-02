import { Router } from 'express';
import { validate } from '../middlewares/validate';
import { productSchema } from '../zod/schemas';
import {
    getProducts,
    getProductById,
    createProduct,
    updateProductById,
    deleteProductById,
} from '../controllers/product';
import { checkIfProductExists } from '../middlewares/checkIfExits';

const productRouter = Router();

productRouter
    .route('/')
    .get(getProducts)
    .post(validate(productSchema), createProduct);

productRouter
    .route('/:id')
    .get(checkIfProductExists, getProductById)
    .put(checkIfProductExists, validate(productSchema), updateProductById)
    .delete(checkIfProductExists, deleteProductById);

export default productRouter;
