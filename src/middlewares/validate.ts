import { ZodSchema } from 'zod';
import { Request, Response, NextFunction } from 'express';

export function validate(schema: ZodSchema) {
    return async function schemaValidation(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        try {
            schema.parse(req.body);
            next();
        } catch (error) {
            console.log(error);
            res.json({ error });
        }
    };
}
