import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DepartmentEntity } from './entities/department.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DepartmentEntity])],
})
export class DepartmentsModule {}
