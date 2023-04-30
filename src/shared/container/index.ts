import { container } from 'tsyringe';

import { ICategoriesRepository } from '../../modules/category/repositories/ICategoriesRepository';
import { CategoriesReposity } from '../../modules/category/repositories/implementations/CategoriesRepository';

import { ISpecificationRepository } from '../../modules/category/repositories/ISpecificationsRepository';
import { SpecificationRepository } from '../../modules/category/repositories/implementations/SpecificationsRepository';

import { IUsersRepository } from '../../modules/accounts/repositories/IUsersRepository';
import { UsersRepository } from '../../modules/accounts/repositories/implementations/UsersRepository';

container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesReposity
);

container.registerSingleton<ISpecificationRepository>(
    "SpecificationRepository",
    SpecificationRepository
)

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
)