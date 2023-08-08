import { Exclude } from 'class-transformer';
import { PostEntity } from 'src/modules/post/model/post.entity';
import { Role } from 'src/modules/roles/roles.enum';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class AdminEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, select: false })
  login: string;

  @Column({ select: true })
  @Exclude({ toPlainOnly: true })
  passwordHash?: string;

  @Column({ nullable: false })
  nickName: string;

  @OneToMany(() => PostEntity, (posts) => posts.author)
  posts: PostEntity[];

  @Column({ default: 'user' })
  role: Role;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn({ select: false })
  updatedAt: Date;
}
