import { Router } from "express";

import { listCategoryController } from "../use-cases/ListCategory";
import { createCategoryController } from "../use-cases/CreateCategory";

const categoriesRouter = Router();

categoriesRouter.post("/", (request, response) => {
    return createCategoryController.handle(request, response);
})

categoriesRouter.get("/", (request, response) => {
    return listCategoryController.handle(request, response);
})

export { categoriesRouter }