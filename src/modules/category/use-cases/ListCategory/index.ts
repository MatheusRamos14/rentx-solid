import { CategoriesReposity } from "../../repositories/CategoriesRepository";
import { ListCategoryUseCase } from "./ListCategoryUseCase";
import { ListCategoryController } from "./ListCategoryController";

const categoriesRepository = new CategoriesReposity();
const listCategoryUseCase = new ListCategoryUseCase(categoriesRepository);
const listCategoryController = new ListCategoryController(listCategoryUseCase);

export { listCategoryController };