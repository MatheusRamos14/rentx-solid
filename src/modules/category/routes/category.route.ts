import { Router } from "express";

import { CategoriesReposity } from "../repositories/CategoriesRepository";
import { createCategoryController } from "../use-cases/CreateCategory";

const categoriesRouter = Router();
const categoriesRepository = new CategoriesReposity();

categoriesRouter.post("/", (request, response) => {
    return createCategoryController.handle(request, response);
})

categoriesRouter.get("/", (request, response) => {
    const categories = categoriesRepository.list();

    return response.json(categories);
})

export { categoriesRouter }