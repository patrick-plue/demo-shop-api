import { Request, Response } from 'express';
import db from '../db';
import { category } from '../db/schema';
import { eq } from 'drizzle-orm';
export async function createCategory(req: Request, res: Response) {
    try {
        const result = await db.insert(category).values(req.body).returning();
        res.json({ message: 'category created', result });
    } catch (error) {
        res.status(500).send('Something went wrong');
    }
}

export async function getCategories(req: Request, res: Response) {
    try {
        const categories = await db.query.category.findMany();
        res.json({ message: 'categories retrieved', result: categories });
    } catch (error) {
        res.status(500).send('Something went wrong');
    }
}

export async function getCategoryById(req: Request, res: Response) {
    try {
        const result = await db.query.category.findMany({
            where: eq(category.id, +req.params.id),
        });
        res.json({ message: 'category retrieved', result });
    } catch (error) {
        res.status(500).send('Something went wrong');
    }
}

export async function updateCategoryById(req: Request, res: Response) {
    try {
        const result = await db
            .update(category)
            .set({ name: req.body.name })
            .where(eq(category.id, +req.params.id))
            .returning();
        res.json({ message: 'category updated', result });
    } catch (error) {
        res.status(500).send('Something went wrong');
    }
}

export async function deleteCategoryById(req: Request, res: Response) {
    try {
        const result = await db
            .delete(category)
            .where(eq(category.id, +req.params.id))
            .returning();

        res.json({ message: 'category deleted', result });
    } catch (error) {
        res.status(500).send('Something went wrong');
    }
}
