import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ImportCategoriesUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) { }

    execute(file: any) {
        console.log(file)
    }
}

export { ImportCategoriesUseCase }