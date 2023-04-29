import { container } from 'tsyringe';

import { ICategoriesRepository } from '../../modules/category/repositories/ICategoriesRepository';
import { CategoriesReposity } from '../../modules/category/repositories/implementations/CategoriesRepository';

import { ISpecificationRepository } from '../../modules/category/repositories/ISpecificationsRepository';
import { SpecificationRepository } from '../../modules/category/repositories/implementations/SpecificationsRepository';

container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesReposity
);

container.registerSingleton<ISpecificationRepository>(
    "SpecificationRepository",
    SpecificationRepository
)