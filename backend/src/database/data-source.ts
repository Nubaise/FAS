import 'reflect-metadata';
import 'dotenv/config';
import { DataSource } from 'typeorm';

import { UserEntity } from '../users/entities/user.entity';

export default new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  synchronize: false,
  entities: [UserEntity],
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
});
