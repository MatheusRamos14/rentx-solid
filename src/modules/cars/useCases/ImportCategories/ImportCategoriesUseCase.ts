import { inject, injectable } from "tsyringe";
import { loadCategories, ICategory } from "../../../../utils/loadCategories";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

@injectable()
class ImportCategoriesUseCase {
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository
    ) { }

    async execute(file: Express.Multer.File): Promise<void> {
        const categories: ICategory[] = await loadCategories(file);

        categories.forEach(async category => {
            const alreadyExists = await this.categoriesRepository.findByName(category.name);

            if (!alreadyExists) {
                await this.categoriesRepository.create(category);
            }
        })
    }
}

export { ImportCategoriesUseCase }