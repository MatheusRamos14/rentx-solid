import { Repository, getRepository } from "typeorm";

import { Category } from "../../entities/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository";

class CategoriesReposity implements ICategoriesRepository {
    private repository: Repository<Category>;

    public static INSTANCE: CategoriesReposity;

    private constructor() {
        this.repository = getRepository(Category);
    }

    public static getInstance(): CategoriesReposity {
        if (!CategoriesReposity.INSTANCE) {
            CategoriesReposity.INSTANCE = new CategoriesReposity();
        }

        return CategoriesReposity.INSTANCE;
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