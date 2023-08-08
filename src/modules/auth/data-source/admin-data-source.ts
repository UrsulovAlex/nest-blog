import { DataSource, DataSourceOptions } from 'typeorm';
import { AdminEntity } from '../../admin/model/admin.entity';
import { PostEntity } from 'src/modules/post/model/post.entity';
import { CategoryEntity } from 'src/modules/category/entities/category.entity';
import { CommentEntity } from 'src/modules/comments/entities/comment.entity';

export const AdminDataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'blog_db',
  dropSchema: false,
  migrationsRun: false,
  entities: [AdminEntity, PostEntity, CategoryEntity, CommentEntity],
  migrations: [],
  synchronize: true,
};

const dataSorceBace = new DataSource(AdminDataSourceOptions);
export default dataSorceBace;