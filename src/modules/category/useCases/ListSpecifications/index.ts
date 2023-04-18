import { SpecificationRepository } from "../../repositories/implementations/SpecificationsRepository";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";
import { ListSpecificationsController } from "./ListSpecificationsController";

const specificationRepository = SpecificationRepository.getInstance();
const listCategoryUseCase = new ListSpecificationsUseCase(specificationRepository);
const listSpecificationsController = new ListSpecificationsController(listCategoryUseCase);

export { listSpecificationsController };