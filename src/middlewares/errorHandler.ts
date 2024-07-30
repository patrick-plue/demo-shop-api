import { NextFunction, Request, Response } from 'express';
interface customError extends Error {
    statusCode: number;
    message: string;
}

export function errorHandler(
    err: customError,
    req: Request,
    res: Response,
    next: NextFunction
) {
    const customError = {
        statusCode: err.statusCode || 500,
        message: err.message || 'Internal Error',
    };

    res.status(customError.statusCode).json({ message: customError.message });
}
