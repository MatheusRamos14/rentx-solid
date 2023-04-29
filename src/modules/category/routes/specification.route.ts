import { Router } from "express";

import { CreateSpecificationController } from "../useCases/CreateSpecification/CreateSpecificationController";
import { ListSpecificationsController } from "../useCases/ListSpecifications/ListSpecificationsController";

const specificationRouter = Router();

const createSpecificationController = new CreateSpecificationController();
const listSpecificationsController = new ListSpecificationsController();

specificationRouter.post("/", createSpecificationController.handle);

specificationRouter.get("/", listSpecificationsController.handle);

export { specificationRouter };