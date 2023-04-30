import { Request, Response } from "express";
import { container } from "tsyringe";

import { ImportCategoriesUseCase } from "./ImportCategoriesUseCase";

class ImportCategoriesController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { file } = request;
        if (!file) throw new Error("Invalid file or not found")

        const importCategoriesUseCase = container.resolve(ImportCategoriesUseCase)

        await importCategoriesUseCase.execute(file)

        return response.status(201).send();
    }
}

export { ImportCategoriesController }; 