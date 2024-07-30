import { NextFunction, Request, Response } from 'express';
import db from '../db';
import { category } from '../db/schema';
import { eq } from 'drizzle-orm';
import { CategoryRequest } from '../types/requests';

export async function createCategory(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const result = await db.insert(category).values(req.body).returning();
        res.json({ message: 'category created', result });
    } catch (error) {
        next(error);
    }
}

export async function getCategories(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const categories = await db.query.category.findMany();
        res.json({ message: 'categories retrieved', result: categories });
    } catch (error) {
        next(error);
    }
}

export async function getCategoryById(
    req: CategoryRequest,
    res: Response,
    next: NextFunction
) {
    res.json({ message: 'category retrieved', result: req.category });
}

export async function updateCategoryById(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const result = await db
            .update(category)
            .set({ name: req.body.name })
            .where(eq(category.id, +req.params.id))
            .returning();
        res.json({ message: 'category updated', result });
    } catch (error) {
        next(error);
    }
}

export async function deleteCategoryById(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const result = await db
            .delete(category)
            .where(eq(category.id, +req.params.id))
            .returning();

        res.json({ message: 'category deleted', result });
    } catch (error) {
        next(error);
    }
}
