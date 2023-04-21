import { loadCategories, ICategory } from "../../../../utils/loadCategories";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ImportCategoriesUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) { }

    async execute(file: Express.Multer.File) {
        const categories: ICategory[] = await loadCategories(file);

        categories.forEach(category => {
            const alreadyExists = this.categoriesRepository.findByName(category.name);

            if (!alreadyExists) {
                this.categoriesRepository.create(category);
            }
        })
    }
}

export { ImportCategoriesUseCase }