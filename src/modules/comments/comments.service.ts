import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentEntity } from './entities/comment.entity';
import { Repository } from 'typeorm/repository/Repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(CommentEntity)
    private commentRepository: Repository<CommentEntity>,
  ) {}

  create(createCommentDto: CreateCommentDto): Promise<CommentEntity> {
    const comment = this.commentRepository.create(createCommentDto);
    return this.commentRepository.save(comment);
  }

  async findAllPostComments(id: number): Promise<CommentEntity[]> {
    return await this.commentRepository.find({
      relations: { commentPost: true },
      where: { postId: id }});
  }

  async findOne(id: number): Promise<CommentEntity> {
    try {
      return await this.commentRepository.findOne({
        select: {
          commentPost: {
            id: true,
            title: true,
            categoryId: true,
          },
        },
        where: { id },
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(
    id: number,
    updateCommentDto: UpdateCommentDto,
  ): Promise<CommentEntity> {
    const updateComment = await this.findOne(id);
    return this.commentRepository.save({
      ...updateComment,
      ...updateCommentDto,
    });
  }

  async remove(id: number): Promise<CommentEntity> {
    const removComment = await this.findOne(id);
    return await this.commentRepository.remove(removComment);
  }
}
