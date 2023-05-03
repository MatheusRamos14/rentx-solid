import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import { UsersRepository } from '../modules/accounts/repositories/implementations/UsersRepository';

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
        throw new Error("Token is missing.")

    const [, token] = authHeader.split(' ');

    try {
        
        const { sub } = verify(token, '2b65d7007a95df4190a864f1abfade85') as IPayload;

        const usersRepository = new UsersRepository();
        const user = await usersRepository.findById(sub);

        if (!user)
            throw new Error("User does not exist.")

        next();
    } catch (error) {
        console.log(error); 
        throw new Error("Invalid token!");
    }
}