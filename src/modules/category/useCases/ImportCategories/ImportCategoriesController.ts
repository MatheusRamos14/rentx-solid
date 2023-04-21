import { Request, Response } from "express";
import { ImportCategoriesUseCase } from "./ImportCategoriesUseCase";

class ImportCategoriesController {
    constructor(private importCategoriesUseCase: ImportCategoriesUseCase) {}

    handle(request: Request, response: Response) {
        const { file } = request;
        if (!file) throw new Error("Invalid file or not found")

        this.importCategoriesUseCase.execute(file)

        return response.status(200).send();
    }
}

export { ImportCategoriesController }; 