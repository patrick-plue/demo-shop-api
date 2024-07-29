import { Router } from 'express';

const userRouter = Router();

userRouter.route('/').get(getUsers).post(createUser);

userRouter.route('/:id').get(getUser).put(updateUser).delete(deleteUser);

export default userRouter;
