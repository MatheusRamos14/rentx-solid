import "reflect-metadata";
import "express-async-errors";

import express, { NextFunction, Request, Response } from 'express';
import swaggerUI from 'swagger-ui-express';

import swaggerJSON from './swagger.json';
import { router } from './routes';

import './shared/container';
import './database';
import { AppError } from "./shared/errors/AppError";

const app = express();
app.use(express.json())

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJSON))
app.use(router)

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {        
    if (err instanceof AppError) {
        // const a = err.statusCode;
        // console.log(a)
        return response.status(err.statusCode).json({
            message: err.message
        })
    }

    return response.status(500).json({
        status: "Error",
        message: `Internal server error - ${err.message}`        
    })
})

export { app };