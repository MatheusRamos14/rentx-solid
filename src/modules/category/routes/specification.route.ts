import { Router } from "express";

import { SpecificationRepository } from "../repositories/SpecificationsRepository";
import { CreateSpecificationService } from "../services/CreateSpecificationService";

const specificationRouter = Router();
const specificationRepository = new SpecificationRepository();

specificationRouter.post("/", (request, response) => {
    const { name, description } = request.body;

    const createSpecificationService = new CreateSpecificationService(specificationRepository);
    createSpecificationService.execute({ name, description });

    return response.status(201).send();
});

specificationRouter.get("/", (request, response) => {
    const specifications = specificationRepository.list();

    return response.json(specifications);
});

export { specificationRouter };