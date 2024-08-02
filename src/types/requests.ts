import { Request } from 'express';
export interface CategoryRequest extends Request {
    category?: {
        id: number;
        name: string;
    };
}

export interface ProductRequest extends Request {
    product?: {
        id: number;
        name: string;
        description: string;
        price: number;
        categoryId: number | null;
    };
}

export interface OrderRequest extends Request {
    order?: {
        id: number;
        userId: number;
        total: number;
    };
}
