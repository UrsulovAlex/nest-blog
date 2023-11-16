import { PostEntity } from 'src/modules/post/model/post.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  title: string;

  @OneToMany(() => PostEntity, (category) => category.nameCategory)
  categoryPosts: PostEntity[];

  categoryPostsCount: number;
}
