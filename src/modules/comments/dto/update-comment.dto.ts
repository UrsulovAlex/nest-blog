import { PartialType } from '@nestjs/mapped-types';
import { CreateCommentDto } from './create-comment.dto';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UpdateCommentDto extends PartialType(CreateCommentDto) {
  @IsString()
  @IsNotEmpty({ message: 'message must Be No tEmpty' })
  @MinLength(2, {
    message: 'Text is too less more than 2 characters',
  })
  readonly message: string;
}
