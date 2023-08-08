import { IsString, IsNotEmpty, MinLength, IsOptional } from 'class-validator';
import { Role } from 'src/modules/roles/roles.enum';

export class CreateAdminDto {
  @IsString()
  @IsNotEmpty({ message: 'must Be No tEmpty' })
  @MinLength(3, {
    message: 'Text is too less more than 3 characters',
  })
  readonly login: string;

  @IsString()
  @IsNotEmpty({ message: 'must Be No tEmpty' })
  @MinLength(5, {
    message: 'Text is too short less than 10 characters',
  })
  readonly passwordHash: string;

  @IsString()
  @IsNotEmpty({ message: 'must Be No tEmpty' })
  @MinLength(3, {
    message: 'Text is too short less than 3 characters',
  })
  readonly nickName: string;

  @IsOptional()
  role: Role;
}
