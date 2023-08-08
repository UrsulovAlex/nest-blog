import { PartialType } from '@nestjs/swagger';
import { IsOptional, IsString, MinLength } from 'class-validator';
import { CreateAdminDto } from './creat-admin.dto';
import { Role } from 'src/modules/roles/roles.enum';

export class UpdateAdmintDto extends PartialType(CreateAdminDto) {
  @IsString()
  @IsOptional()
  @MinLength(3, {
    message: 'Text is too less more than 3 characters',
  })
  readonly login: string;

  @IsString()
  @IsOptional()
  @MinLength(5, {
    message: 'Text is too short less than 5 characters',
  })
  readonly passwordHash: string;

  @IsString()
  @IsOptional()
  @MinLength(3, {
    message: 'Text is too short less than 3 characters',
  })
  readonly nickName: string;

  @IsOptional()
  role: Role;
}
