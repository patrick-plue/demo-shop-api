import { Router } from 'express';

const categoryRouter = Router();

categoryRouter.route('/').get(getCategories).post(createCategory);

categoryRouter
    .route('/:id')
    .get(getCategory)
    .put(updateCategory)
    .delete(deleteCategory);

export default categoryRouter;
