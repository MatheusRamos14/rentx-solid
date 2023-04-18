import { Router } from "express";

import { listCategoryController } from "../useCases/ListCategory";
import { createCategoryController } from "../useCases/CreateCategory";

const categoriesRouter = Router();

categoriesRouter.post("/", (request, response) => {
    return createCategoryController.handle(request, response);
})

categoriesRouter.get("/", (request, response) => {
    return listCategoryController.handle(request, response);
})

export { categoriesRouter }