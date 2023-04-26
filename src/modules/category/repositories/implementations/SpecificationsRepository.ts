import { Specification } from "../../entities/Specification";
import { ICreateSpecificationDTO, ISpecificationRepository } from "../ISpecificationsRepository";

class SpecificationRepository implements ISpecificationRepository {
    private specifications: Specification[];

    public static INSTANCE: SpecificationRepository;

    public static getInstance(): SpecificationRepository {
        if (!SpecificationRepository.INSTANCE) {
            SpecificationRepository.INSTANCE = new SpecificationRepository();
        }

        return SpecificationRepository.INSTANCE;
    }

    private constructor() {
        this.specifications = [];
    }    
    list(): Specification[] {
        return this.specifications;
    }

    create({ name, description }: ICreateSpecificationDTO): void {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
            created_at: new Date()
        })

        this.specifications.push(specification);
    }

    findByName(name: string): Specification | undefined {
        const specification = this.specifications.find(specification => specification.name === name);
        return specification;
    }
}

export { SpecificationRepository };