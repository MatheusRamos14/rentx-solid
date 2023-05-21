import { Request, Response, NextFunction } from 'express';
import { TokenExpiredError, verify } from 'jsonwebtoken';

import { UsersRepository } from '@modules/accounts/repositories/implementations/UsersRepository';
import { AppError } from '@shared/errors/AppError';

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction,
) {
    const authHeader = request.headers.authorization;
    if (!authHeader)
        throw new AppError("Token is missing.", 400)

    const [, token] = authHeader.split(' ');

    try {

        const { sub } = verify(token, '2b65d7007a95df4190a864f1abfade85') as IPayload;

        const usersRepository = new UsersRepository();
        const user = await usersRepository.findById(sub);

        if (!user)
            throw new AppError("User does not exist.", 404)

        request.user = {
            id: sub
        }

        next();
    } catch (error) {
        throw new AppError("Invalid token!", 401);
    }
}