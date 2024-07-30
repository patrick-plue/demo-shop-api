import { Router } from 'express';
import { validate } from '../middlewares/validate';
import { categorySchema } from '../zod/schemas';
import {
    createCategory,
    deleteCategoryById,
    getCategories,
    getCategoryById,
    updateCategoryById,
} from '../controllers/category';

const categoryRouter = Router();

categoryRouter
    .route('/')
    .get(getCategories)
    .post(validate(categorySchema), createCategory);

categoryRouter
    .route('/:id')
    .get(getCategoryById)
    .put(validate(categorySchema), updateCategoryById)
    .delete(deleteCategoryById);

export default categoryRouter;
