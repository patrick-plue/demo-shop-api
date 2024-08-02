import { NextFunction, Request, Response } from 'express';
import db from '../db';
import { category, product, order, user } from '../db/schema';
import { eq } from 'drizzle-orm';
import ErrorResponse from '../utils/ErrorResponse';
import {
    CategoryRequest,
    OrderRequest,
    ProductRequest,
    UserRequest,
} from '../types/requests';

export async function checkIfCategoryExists(
    req: CategoryRequest,
    res: Response,
    next: NextFunction
) {
    try {
        const result = await db.query.category.findFirst({
            where: eq(category.id, +req.params.id),
        });
        if (!result) throw new ErrorResponse('category not found', 404);
        req.category = result;
        next();
    } catch (error) {
        next(error);
    }
}

export async function checkIfProductExists(
    req: ProductRequest,
    res: Response,
    next: NextFunction
) {
    try {
        const result = await db.query.product.findFirst({
            where: eq(product.id, +req.params.id),
        });
        if (!result) throw new ErrorResponse('product not found', 404);
        req.product = result;
        next();
    } catch (error) {
        next(error);
    }
}

export async function checkIfOrderExists(
    req: OrderRequest,
    res: Response,
    next: NextFunction
) {
    try {
        const result = await db.query.order.findFirst({
            where: eq(order.id, +req.params.id),
        });
        if (!result) throw new ErrorResponse('order not found', 404);
        req.order = result;
        next();
    } catch (error) {
        next(error);
    }
}

export async function checkIfUserExists(
    req: UserRequest,
    res: Response,
    next: NextFunction
) {
    try {
        const result = await db.query.user.findFirst({
            where: eq(user.id, +req.params.id),
        });
        if (!result) throw new ErrorResponse('user not found', 404);
        req.user = result;
        next();
    } catch (error) {
        next(error);
    }
}
