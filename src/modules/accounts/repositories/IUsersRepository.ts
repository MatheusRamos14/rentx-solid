import { User } from "../entities/User";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

interface IUsersRepository {
    create({}: ICreateUserDTO): Promise<void>;
    findByEmail(email: string): Promise<User | undefined>;
}

export { IUsersRepository }