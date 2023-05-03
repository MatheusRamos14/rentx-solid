import { Router } from "express";
import { AuthenticateUserController } from "../modules/accounts/useCases/AuthenticateUser/AuthenticateUserController";

const sessionRouter = Router();

const authenticateUserController = new AuthenticateUserController()

sessionRouter.post("/",authenticateUserController.handle);

export { sessionRouter };