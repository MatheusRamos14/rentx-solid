import { Router } from "express";

import { CategoriesReposity } from "../repositories/CategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoriesRouter = Router();
const categoriesRepository = new CategoriesReposity();

categoriesRouter.post("/", (request, response) => {
    const { name, description } = request.body;

    const createCategoryService = new CreateCategoryService(categoriesRepository);
    createCategoryService.execute({ name, description });

    response.status(201).send()
})

categoriesRouter.get("/", (request, response) => {
    const categories = categoriesRepository.list();

    return response.json(categories);
})

export { categoriesRouter }