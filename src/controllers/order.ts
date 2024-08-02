import { NextFunction, Request, Response } from 'express';
import db from '../db';
import { order } from '../db/schema';
import { eq } from 'drizzle-orm';
import { OrderRequest } from '../types/requests';

export async function createOrder(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const result = await db.insert(order).values(req.body).returning();
        res.json({ message: 'order created', result });
    } catch (error) {
        next(error);
    }
}

export async function getOrders(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const orders = await db.query.order.findMany();
        res.json({ message: 'orders retrieved', result: orders });
    } catch (error) {
        next(error);
    }
}

export async function getOrderById(
    req: OrderRequest,
    res: Response,
    next: NextFunction
) {
    res.json({ message: 'order retrieved', result: req.order });
}

export async function updateOrderById(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const result = await db
            .update(order)
            .set(req.body)
            .where(eq(order.id, +req.params.id))
            .returning();
        res.json({ message: 'order updated', result });
    } catch (error) {
        next(error);
    }
}

export async function deleteOrderById(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const result = await db
            .delete(order)
            .where(eq(order.id, +req.params.id))
            .returning();

        res.json({ message: 'order deleted', result });
    } catch (error) {
        next(error);
    }
}
