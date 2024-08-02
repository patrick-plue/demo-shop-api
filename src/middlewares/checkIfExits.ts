import { NextFunction, Request, Response } from 'express';
import db from '../db';
import { category } from '../db/schema';
import { eq } from 'drizzle-orm';
import ErrorResponse from '../utils/ErrorResponse';
import { CategoryRequest, ProductRequest } from '../types/requests';

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
            where: eq(category.id, +req.params.id),
        });
        if (!result) throw new ErrorResponse('product not found', 404);
        req.product = result;
        next();
    } catch (error) {
        next(error);
    }
}
