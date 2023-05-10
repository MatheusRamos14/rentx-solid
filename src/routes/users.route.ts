import { Router } from "express";
import multer from "multer";

import upload from "../config/upload";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateUserController } from "../modules/accounts/useCases/CreateUser/CreateUserController";
import { UploadUserAvatarController } from "../modules/accounts/useCases/UploadUserAvatar/UploadUserAvatarController";

const usersRouter = Router();

const uploadAvatar = multer(upload("./tmp/avatar"));

const createUserController = new CreateUserController();
const uploadUserAvatarController = new UploadUserAvatarController();

usersRouter.post("/", createUserController.handle);

usersRouter.patch(
   "/avatar",
   ensureAuthenticated,
   uploadAvatar.single("avatar"),
    uploadUserAvatarController.handle
)

export { usersRouter };