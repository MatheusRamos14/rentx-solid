import { injectable, inject } from "tsyringe";

import { ISpecificationRepository } from "../../repositories/ISpecificationsRepository";
import { Specification } from "../../entities/Specification";

@injectable()
class ListSpecificationsUseCase {
    constructor(
        @inject('SpecificationRepository')
        private specificationsRepository: ISpecificationRepository
    ) {}

    async execute(): Promise<Specification[]> {
        return await this.specificationsRepository.list();
    }
}

export { ListSpecificationsUseCase }