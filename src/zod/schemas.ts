import { z } from 'zod';

export const userSchema = z.object({
    name: z.string().trim(),
    email: z.string().email().trim().toLowerCase(),
    password: z.string().min(8).trim(),
});

export const productSchema = z.object({
    name: z.string().trim().min(2).max(50).min(2),
    description: z.string().trim().min(2),
    price: z.number().positive(),
    categoryId: z.number(),
});

export const categorySchema = z.object({
    name: z.string().trim().min(2).max(20).toLowerCase(),
});

export const orderSchema = z.object({
    userId: z.number(),
    total: z.number().positive(),
});
