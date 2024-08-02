import { NextFunction, Request, Response } from 'express';
import db from '../db';
import { product } from '../db/schema';
import { eq } from 'drizzle-orm';
import { ProductRequest } from '../types/requests';
import { emitWarning } from 'process';

export async function createProduct(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const result = await db.insert(product).values(req.body).returning();
        res.json({ message: 'product created', result });
    } catch (error) {
        next(error);
    }
}

export async function getProducts(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const products = await db.query.product.findMany();
        res.json({ message: 'products retrieved', result: products });
    } catch (error) {
        next(error);
    }
}

export async function getProductById(
    req: ProductRequest,
    res: Response,
    next: NextFunction
) {
    res.json({ message: 'product retrieved', result: req.product });
}

export async function updateProductById(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const result = await db
            .update(product)
            .set(req.body)
            .where(eq(product.id, +req.params.id))
            .returning();
        res.json({ message: 'product updated', result });
    } catch (error) {
        next(error);
    }
}

export async function deleteProductById(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const result = await db
            .delete(product)
            .where(eq(product.id, +req.params.id))
            .returning();

        res.json({ message: 'product deleted', result });
    } catch (error) {
        next(error);
    }
}
