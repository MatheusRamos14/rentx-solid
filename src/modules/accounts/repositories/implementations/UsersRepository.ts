import { getRepository, Repository } from "typeorm";

import { User } from "@modules/accounts/entities/User";
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";

class UsersRepository implements IUsersRepository {
    private users: Repository<User>;

    constructor() {
        this.users = getRepository(User);
    }

    async create({
        name,
        email,
        driver_license,
        password,
        id,
        avatar
    }: ICreateUserDTO): Promise<void> {
        const user = this.users.create({
            id,
            avatar,
            name,
            email,
            driver_license,
            password,
            created_at: new Date(),
        });
        
        await this.users.save(user);
    }

    async findByEmail(email: string): Promise<User | undefined> {
        const user = await this.users.findOne({ email });

        return user;
    }

    async findById(id: string): Promise<User | undefined> {
        const user = await this.users.findOne(id);

        return user;
    }
}

export { UsersRepository }