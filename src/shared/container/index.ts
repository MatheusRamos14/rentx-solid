import { container } from 'tsyringe';

import { ICategoriesRepository } from '@modules/cars/repositories/ICategoriesRepository';
import { CategoriesReposity } from '@modules/cars/repositories/implementations/CategoriesRepository';

import { ISpecificationRepository } from '@modules/cars/repositories/ISpecificationsRepository';
import { SpecificationRepository } from '@modules/cars/repositories/implementations/SpecificationsRepository';

import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { UsersRepository } from '@modules/accounts/repositories/implementations/UsersRepository';

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