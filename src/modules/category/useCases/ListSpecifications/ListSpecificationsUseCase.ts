import { ISpecificationRepository } from "../../repositories/ISpecificationsRepository";

class ListSpecificationsUseCase {
    constructor(private specificationsRepository: ISpecificationRepository) {}
    execute() {
        return this.specificationsRepository.list();
    }
}

export { ListSpecificationsUseCase }