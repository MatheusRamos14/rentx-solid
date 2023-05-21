import { User } from "@modules/accounts/entities/User";
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository {
    private users: User[] = [];

    async create({ name, email, driver_license, password }: ICreateUserDTO): Promise<void> {
        const user = new User();

        Object.assign(user, {
            name,
            email,
            password,
            driver_license,
        });

        this.users.push(user);
    }

    async findByEmail(email: string): Promise<User | undefined> {
        return this.users.find(user => user.email === email);
    }

    async findById(id: string): Promise<User | undefined> {
        return this.users.find(user => user.id === id);
    }
}

export { UsersRepositoryInMemory };