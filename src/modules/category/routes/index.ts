import { Router } from "express";

import { categoriesRouter } from "./category.route";
import { specificationRouter } from "./specification.route";

const router = Router();

router.use('/categories', categoriesRouter);
router.use('/specifications', specificationRouter);

export { router };