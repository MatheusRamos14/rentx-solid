import "reflect-metadata";
import { AppError } from "../../../../shared/errors/AppError";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { CategoriesRepositoryInMemory } from "../../repositories/InMemory/CategoriesRepositoryInMemory";

describe('Create category', () => {
    let createCategoryUseCase: CreateCategoryUseCase;
    let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

    beforeEach(() => {
        categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();

        createCategoryUseCase = new CreateCategoryUseCase(categoriesRepositoryInMemory);
    })

    it("should be able to create a new category", async () => {
        const category = {
            name: "Test category",
            description: "Test category description"
        }

        await createCategoryUseCase.execute(category);

        const categoryCreated = await categoriesRepositoryInMemory.findByName(category.name);        

        expect(categoryCreated).toHaveProperty("id");
    });

    it("shouldn't be able to create a category whose name exists", async () => {
        expect(async () => {
            const category = {
                name: "Test category",
                description: "Test category description"
            }
    
            await createCategoryUseCase.execute(category);    
            await createCategoryUseCase.execute(category);
        }).rejects.toBeInstanceOf(AppError);
    })
})