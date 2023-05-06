import { inject, injectable } from "tsyringe";
import { compare } from "bcryptjs";
import { sign } from 'jsonwebtoken';

import { IUsersRepository } from "../../repositories/IUsersRepository";
import { AppError } from "../../../../shared/errors/AppError";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string;
        email: string;
    };
    token: string;
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private userRepository: IUsersRepository
    ) {}

    async execute({ email, password }: IRequest) {
        const user = await this.userRepository.findByEmail(email);
        if (!user) throw new AppError("E-mail or password incorrect!", 401);

        const passwordMatch = await compare(password, user.password);
        if (!passwordMatch) throw new AppError("E-mail or password incorrect!", 401);

        const token = sign({}, '2b65d7007a95df4190a864f1abfade85', {
            subject: user.id,
            expiresIn: '1d'
        })

        const returnToken: IResponse = {
            token,
            user: {
                name: user.name,
                email: user.email
            }
        }

        return returnToken;
    }
}

export { AuthenticateUserUseCase };