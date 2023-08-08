import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { AdminDataSourceOptions } from './modules/auth/data-source/admin-data-source';
import { AdminMenuModule } from './modules/admin-menu/admin-menu.module';
import { PostModule } from './modules/post/post.module';
import { CategoryModule } from './modules/category/category.module';
import { CommentsModule } from './modules/comments/comments.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(AdminDataSourceOptions),
    AuthModule,
    ConfigModule.forRoot(),
    AdminMenuModule,
    PostModule,
    CategoryModule,
    CommentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
