import { Router } from "express";

import { categoriesRouter } from "./category.route";
import { sessionRouter } from "./session.route";
import { specificationRouter } from "./specification.route";
import { usersRouter } from "./users.route";

const router = Router();

router.use('/categories', categoriesRouter);
router.use('/specifications', specificationRouter);
router.use('/users', usersRouter);
router.use('/sessions', sessionRouter)

export { router };