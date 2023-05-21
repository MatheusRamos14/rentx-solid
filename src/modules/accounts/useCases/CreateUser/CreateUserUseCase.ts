import { inject, injectable } from "tsyringe";
import { hash } from 'bcryptjs';

import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";

interface IRequest {
    name: string;
    password: string;
    email: string;
    driver_license: string;
}

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }

    async execute({
        name,
        email,
        password,
        driver_license
    }: IRequest) {
        const passwordHash = await hash(password, 8);

        await this.usersRepository.create({
            name,
            email,
            password: passwordHash,
            driver_license
        })
    }
}

export { CreateUserUseCase };