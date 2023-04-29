import "reflect-metadata";

import express from 'express';
import swaggerUI from 'swagger-ui-express';

import swaggerJSON from './swagger.json';
import { router } from './modules/category/routes';

import './shared/container';
import './database';

const app = express();
app.use(express.json())

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJSON))
app.use(router)

export { app };