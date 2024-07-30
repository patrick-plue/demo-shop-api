import { z } from 'zod';

export const userSchema = z.object({
    name: z.string().trim(),
    email: z.string().email().trim().toLowerCase(),
    password: z.string().min(8).trim(),
});

export const productSchema = z.object({});

export const categorySchema = z.object({
    name: z.string().trim().min(2).max(20).toLowerCase(),
});

export const orderSchema = z.object({});
