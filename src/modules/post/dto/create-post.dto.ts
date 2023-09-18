import {
  IsString,
  IsNotEmpty,
  MinLength,
  IsOptional,
  IsNumber,
} from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty({ message: 'title must Be No tEmpty' })
  @MinLength(3, {
    message: 'title is too less more than 3 characters',
  })
  readonly title: string;

  @IsString()
  @IsNotEmpty({ message: 'must Be No tEmpty' })
  @MinLength(10, {
    message: 'Text is too short less than 10 characters',
  })
  readonly text: string;

  @IsNotEmpty({ message: 'authorPostsId must Be No tEmpty' })
  @IsOptional()
  readonly authorPostsId: number;

  @IsNotEmpty({ message: 'categoryId must Be No tEmpty' })
  @IsNumber()
  readonly categoryId: number;

  @IsNumber()
  readonly commentsId: number;
}
