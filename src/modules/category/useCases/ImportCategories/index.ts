import { CategoriesReposity } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoriesUseCase } from "./ImportCategoriesUseCase";
import { ImportCategoriesController } from "./ImportCategoriesController";

const categoriesRepository = CategoriesReposity.getInstance();
const importCategoriesUseCase = new ImportCategoriesUseCase(categoriesRepository);
const importCategoriesController = new ImportCategoriesController(importCategoriesUseCase);

export { importCategoriesController };