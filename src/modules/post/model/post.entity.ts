import { AdminEntity } from 'src/modules/admin/model/admin.entity';
import { CategoryEntity } from 'src/modules/category/entities/category.entity';
import { CommentEntity } from 'src/modules/comments/entities/comment.entity';

import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class PostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  title: string;

  @Column({ nullable: true, length: 12000 })
  text: string;

  @Column({ nullable: true })
  authorPostsId: number;

  @ManyToOne(() => AdminEntity, (author) => author.posts, { eager: true })
  @JoinColumn([{ name: 'authorPostsId', referencedColumnName: 'id' }])
  author: AdminEntity;

  @Column()
  categoryId: number;

  @ManyToOne(() => CategoryEntity, (category) => category.categoryPosts, {
    eager: true,
  })
  @JoinColumn([{ name: 'categoryId', referencedColumnName: 'id' }])
  nameCategory: CategoryEntity;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ nullable: true })
  commentsId: number;

  @OneToMany(() => CommentEntity, (postComment) => postComment.commentPost)
  postComments: CommentEntity[];
}
