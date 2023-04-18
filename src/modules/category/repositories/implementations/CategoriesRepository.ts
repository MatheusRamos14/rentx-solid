import { Category } from "../../models/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository";

class CategoriesReposity implements ICategoriesRepository {
    private categories: Category[];

    public static INSTANCE: CategoriesReposity;

    private constructor() {
        this.categories = [];
    }

    public static getInstance(): CategoriesReposity {
        if (!CategoriesReposity.INSTANCE) {
            CategoriesReposity.INSTANCE = new CategoriesReposity();
        }

        return CategoriesReposity.INSTANCE;
    }

    create({ name, description }: ICreateCategoryDTO): void {
        const category = new Category();

        Object.assign(category, {
            name,
            description,
            created_at: new Date()
        })

        this.categories.push(category);
    }

    list(): Category[] {
        return this.categories;
    }

    findByName(name: string): Category | undefined {
        const category = this.categories.find(category => category.name === name);

        return category;
    }
}

export { CategoriesReposity };