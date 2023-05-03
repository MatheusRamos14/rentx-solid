import { getRepository, Repository } from "typeorm";

import { User } from "../../entities/User";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
    private users: Repository<User>;

    constructor() {
        this.users = getRepository(User);
    }

    async create({
        name,
        email,
        driver_license,
        password
    }: ICreateUserDTO): Promise<void> {
        const user = this.users.create({
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