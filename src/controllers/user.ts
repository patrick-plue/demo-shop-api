import { NextFunction, Request, Response } from 'express';
import db from '../db';
import { user } from '../db/schema';
import { eq } from 'drizzle-orm';
import { UserRequest } from '../types/requests';

export async function createUser(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const result = await db.insert(user).values(req.body).returning();
        res.json({ message: 'user created', result });
    } catch (error) {
        next(error);
    }
}

export async function getUsers(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const users = await db.query.user.findMany();
        res.json({ message: 'users retrieved', result: users });
    } catch (error) {
        next(error);
    }
}

export async function getUserById(
    req: UserRequest,
    res: Response,
    next: NextFunction
) {
    res.json({ message: 'user retrieved', result: req.user });
}

export async function updateUserById(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const result = await db
            .update(user)
            .set(req.body)
            .where(eq(user.id, +req.params.id))
            .returning();
        res.json({ message: 'user updated', result });
    } catch (error) {
        next(error);
    }
}

export async function deleteUserById(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const result = await db
            .delete(user)
            .where(eq(user.id, +req.params.id))
            .returning();

        res.json({ message: 'user deleted', result });
    } catch (error) {
        next(error);
    }
}
