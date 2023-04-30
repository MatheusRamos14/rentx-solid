import { Router } from "express";
import multer from "multer";

import { ListCategoryController } from "../modules/category/useCases/ListCategory/ListCategoryController";
import { CreateCategoryController } from "../modules/category/useCases/CreateCategory/CreateCategoryController";
import { ImportCategoriesController } from "../modules/category/useCases/ImportCategories/ImportCategoriesController";

const categoriesRouter = Router();
const upload = multer({
    dest: "./tmp"
})

const createCategoryController = new CreateCategoryController();
const listCategoryController = new ListCategoryController();
const importCategoriesController = new ImportCategoriesController();

categoriesRouter.post("/", createCategoryController.handle);

categoriesRouter.get("/", listCategoryController.handle);

categoriesRouter.post("/import", upload.single('file'), importCategoriesController.handle);

export { categoriesRouter }