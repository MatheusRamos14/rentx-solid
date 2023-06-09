import { Repository, getRepository } from "typeorm";

import { Category } from "@modules/cars/entities/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "@modules/cars/repositories/ICategoriesRepository";

class CategoriesReposity implements ICategoriesRepository {
    private repository: Repository<Category>;

    constructor() {
        this.repository = getRepository(Category);
    }

    async create({ name, description }: ICreateCategoryDTO): Promise<void> {
        const category = this.repository.create({
            name,
            description
        });

        await this.repository.save(category);
    }

    async list(): Promise<Category[]> {
        return this.repository.find();
    }

    async findByName(name: string): Promise<Category | undefined> {
        const category = this.repository.findOne({ name });

        return category;
    }
}

export { CategoriesReposity };