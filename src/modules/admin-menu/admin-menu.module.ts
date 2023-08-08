import { Module } from '@nestjs/common';
import { AdminMenuController } from './controllers/admin-menu.controller';

@Module({
  controllers: [AdminMenuController],
})
export class AdminMenuModule {}
