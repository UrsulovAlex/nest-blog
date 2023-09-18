import { PartialType } from '@nestjs/swagger';
import { CreatePostDto } from './create-post.dto';
import { IsNumber, IsOptional, IsString, MinLength } from 'class-validator';

export class UpdatePostDto extends PartialType(CreatePostDto) {
  @IsString()
  @IsOptional()
  @MinLength(3, {
    message: 'Text is too short more than 3 characters',
  })
  readonly title: string;

  @IsString()
  @IsOptional()
  @MinLength(10, {
    message: 'Text is too short more than 10 characters',
  })
  readonly text: string;

  @IsNumber()
  @IsOptional()
  readonly authorPostsId: number;

  @IsNumber()
  @IsOptional()
  readonly categoryId: number;

  @IsNumber()
  @IsOptional()
  readonly commentsId: number;
}
