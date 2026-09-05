import 'reflect-metadata';
import 'dotenv/config';
import { DataSource } from 'typeorm';

import { UserEntity } from '../users/entities/user.entity';
import { DepartmentEntity } from '../departments/entities/department.entity';

export default new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  synchronize: false,
  entities: [UserEntity, DepartmentEntity],
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
});
