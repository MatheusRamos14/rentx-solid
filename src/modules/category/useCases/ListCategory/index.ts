import { CategoriesReposity } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoryUseCase } from "./ListCategoryUseCase";
import { ListCategoryController } from "./ListCategoryController";

const categoriesRepository = null;
const listCategoryUseCase = new ListCategoryUseCase(categoriesRepository);
const listCategoryController = new ListCategoryController(listCategoryUseCase);

export { listCategoryController };