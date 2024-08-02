import { Router } from 'express';
import { validate } from '../middlewares/validate';
import { userSchema } from '../zod/schemas';
import {
    getUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById,
} from '../controllers/user';
const userRouter = Router();

userRouter.route('/').get(getUsers).post(validate(userSchema), createUser);

userRouter
    .route('/:id')
    .get(getUserById)
    .put(validate(userSchema), updateUserById)
    .delete(deleteUserById);

export default userRouter;
