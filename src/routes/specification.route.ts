import { Router } from "express";

import { CreateSpecificationController } from "../modules/cars/useCases/CreateSpecification/CreateSpecificationController";
import { ListSpecificationsController } from "../modules/cars/useCases/ListSpecifications/ListSpecificationsController";

const specificationRouter = Router();

const createSpecificationController = new CreateSpecificationController();
const listSpecificationsController = new ListSpecificationsController();

specificationRouter.post("/", createSpecificationController.handle);

specificationRouter.get("/", listSpecificationsController.handle);

export { specificationRouter };