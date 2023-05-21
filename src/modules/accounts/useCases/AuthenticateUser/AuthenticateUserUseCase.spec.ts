import { UsersRepositoryInMemory } from "../../repositories/InMemory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "../CreateUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO"
import { AppError } from "../../../../shared/errors/AppError";

describe('Authenticate user', () => {
    let usersRepositoryInMemory: UsersRepositoryInMemory;
    let authenticateUserUseCase: AuthenticateUserUseCase;
    let createUserUseCase: CreateUserUseCase;

    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        authenticateUserUseCase = new AuthenticateUserUseCase(usersRepositoryInMemory);
        createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
    })

    it('should be able to authenticate an user', async () => {
        const user: ICreateUserDTO = {
            name: 'Test User',
            email: 'test@teste.com',
            password: 'test123',            
            driver_license: '0014',
        };

        await createUserUseCase.execute(user);

        const result = await authenticateUserUseCase.execute({
            email: user.email,
            password: user.password
        })

        expect(result).toHaveProperty('token');
    })

    it("shouldn't be able to authenticate an user if password is incorrect", async () => {
        expect(async () => {
            const user: ICreateUserDTO = {
                name: 'Test User',
                email: 'test@teste.com',
                password: 'test123',            
                driver_license: '0014',
            };
    
            await createUserUseCase.execute(user);
    
            await authenticateUserUseCase.execute({
                email: user.email,
                password: 'fakepass'
            })
        }).rejects.toBeInstanceOf(AppError);
    })

    it("shouldn't be able to authenticate if user not exists", async () => {
        expect(async () => {    
            await authenticateUserUseCase.execute({
                email: 'fake@mail.com',
                password: 'fakepass'
            })
        }).rejects.toBeInstanceOf(AppError);
    })
})