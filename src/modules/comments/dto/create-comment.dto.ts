import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  @IsNotEmpty({ message: 'message must Be No tEmpty' })
  @MinLength(2, {
    message: 'Text is too less more than 2 characters',
  })
  readonly message: string;

  @IsNumber()
  @IsNotEmpty({ message: 'userId must Be No tEmpty' })
  readonly userId: number;

  @IsNumber()
  @IsNotEmpty({ message: 'userId must Be No tEmpty' })
  readonly postId: number;
}
