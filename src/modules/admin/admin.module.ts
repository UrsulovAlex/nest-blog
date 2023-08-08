import { Module } from '@nestjs/common';
import { AdminController } from './controller/admin/admin.controller';
import { AdminService } from './service/admin.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminEntity } from './model/admin.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AdminEntity])],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
