import { Router } from "express";

import { createSpecificationController } from "../useCases/CreateSpecification";
import { listSpecificationsController } from "../useCases/ListSpecifications";

const specificationRouter = Router();

specificationRouter.post("/", (request, response) => {
    return createSpecificationController.handle(request, response);
});

specificationRouter.get("/", (request, response) => {
    return listSpecificationsController.handle(request, response);
});

export { specificationRouter };