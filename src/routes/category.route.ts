import { Router } from "express";
import multer from "multer";

import { ListCategoryController } from "@modules/cars/useCases/ListCategory/ListCategoryController";
import { CreateCategoryController } from "@modules/cars/useCases/CreateCategory/CreateCategoryController";
import { ImportCategoriesController } from "@modules/cars/useCases/ImportCategories/ImportCategoriesController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const categoriesRouter = Router();
const upload = multer({
    dest: "./tmp"
})

const createCategoryController = new CreateCategoryController();
const listCategoryController = new ListCategoryController();
const importCategoriesController = new ImportCategoriesController();

categoriesRouter.post("/", ensureAuthenticated, createCategoryController.handle);

categoriesRouter.get("/", listCategoryController.handle);

categoriesRouter.post("/import", upload.single('file'), importCategoriesController.handle);

export { categoriesRouter }