import { Router } from 'express';
import { validate } from '../middlewares/validate';
import { userSchema } from '../zod/schemas';

const userRouter = Router();

userRouter.route('/').get(getUsers).post(validate(userSchema), createUser);

userRouter
    .route('/:id')
    .get(getUser)
    .put(validate(userSchema), updateUser)
    .delete(deleteUser);

export default userRouter;
