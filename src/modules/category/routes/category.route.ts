import { Router } from "express";
import multer from "multer";

import { ListCategoryController } from "../useCases/ListCategory/ListCategoryController";
import { CreateCategoryController } from "../useCases/CreateCategory/CreateCategoryController";
import { ImportCategoriesController } from "../useCases/ImportCategories/ImportCategoriesController";

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