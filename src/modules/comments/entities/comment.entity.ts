import { PostEntity } from 'src/modules/post/model/post.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class CommentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 12000 })
  message: string;

  @Column({ nullable: false })
  userId: number;

  @Column({ nullable: false })
  postId: number;

  @ManyToOne(() => PostEntity, (post) => post.id)
  @JoinColumn([{ name: 'postId', referencedColumnName: 'id' }])
  commentPost: PostEntity;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
