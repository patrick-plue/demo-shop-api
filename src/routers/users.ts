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
import { checkIfUserExists } from '../middlewares/checkIfExits';
const userRouter = Router();

userRouter.route('/').get(getUsers).post(validate(userSchema), createUser);

userRouter
    .route('/:id')
    .get(checkIfUserExists, getUserById)
    .put(checkIfUserExists, validate(userSchema), updateUserById)
    .delete(checkIfUserExists, deleteUserById);

export default userRouter;
