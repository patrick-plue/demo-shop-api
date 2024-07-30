import { Request, Response } from 'express';
type Error = {
    statusCode: number;
    message: string;
};

export async function errorHandler(
    err: Error,
    req: Request,
    res: Response
): Promise<void> {
    const customError: Error = {
        statusCode: err.statusCode || 500,
        message: err.message || 'Internal Error',
    };

    res.json(customError);
}
