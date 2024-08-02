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
import { checkIfCategoryExists } from '../middlewares/checkIfExits';

const categoryRouter = Router();

categoryRouter
    .route('/')
    .get(getCategories)
    .post(validate(categorySchema), createCategory);

categoryRouter
    .route('/:id')
    .get(checkIfCategoryExists, getCategoryById)
    .put(checkIfCategoryExists, validate(categorySchema), updateCategoryById)
    .delete(checkIfCategoryExists, deleteCategoryById);

export default categoryRouter;
