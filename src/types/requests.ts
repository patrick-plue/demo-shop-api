import { Request } from 'express';
export interface CategoryRequest extends Request {
    category?: {
        id: number;
        name: string;
    };
}
