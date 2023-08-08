/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostEntity } from './model/post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { AdminEntity } from '../admin/model/admin.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private postRepository: Repository<PostEntity>,
  ) {}

  getAllPost(): Promise<PostEntity[]> {
    return this.postRepository.find({
      relations: {
        nameCategory: true,
        author: true,
      },
    });
  }

  async createPosts(createPostDto: CreatePostDto): Promise<PostEntity> {
    const newPosts = await this.postRepository.create(createPostDto);
    return this.postRepository.save(newPosts);
  }

  async findOne(id: number): Promise<PostEntity> {
    try {
      return await this.postRepository.findOne({
        where: { id },
        relations: {
          nameCategory: true,
          postComments: true,
          author: true,
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async updatePosts(id: number, udatePostDto: UpdatePostDto) {
    const postUpdate = await this.findOne(id);
    return this.postRepository.save({
      ...postUpdate,
      ...udatePostDto,
    });
  }

  async remove(id: number) {
    const post = await this.findOne(id);
    return this.postRepository.remove(post);
  }

  async queryBuilder() {
    return this.postRepository
      .createQueryBuilder('post_entity')
      .leftJoinAndSelect('post_entity.author', 'admin_entity')
      .leftJoinAndSelect('post_entity.nameCategory', 'category_entity')
      .orderBy('post_entity.updatedAt', 'DESC');
  }
}
