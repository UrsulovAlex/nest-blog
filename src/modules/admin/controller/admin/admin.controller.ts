import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { AdminService } from '../../service/admin.service';
import { CreateAdminDto } from '../../dto/creat-admin.dto';
import { UpdateAdmintDto } from '../../dto/update-admin.dto';
import { Roles } from 'src/modules/roles/roles.decorator';
import { Role } from 'src/modules/roles/roles.enum';

@Controller('user')
export class AdminController {
  constructor(private adminService: AdminService) {}

  @Get(':id')
  @UseInterceptors(ClassSerializerInterceptor)
  getOne(@Param('id') id: string) {
    return this.adminService.getAdmin(Number(id));
  }

  @Post('create')
  createUser(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.createUser(createAdminDto);
  }

  @Put('update/:id')
  @Roles(Role.Admin, Role.User)
  update(@Param('id') id: string, @Body() updateAdmintDto: UpdateAdmintDto) {
    return this.adminService.updateUser(+id, updateAdmintDto);
  }

  @Delete('delete/:id')
  @Roles(Role.Admin)
  deleteUser(@Param('id') id: string) {
    return this.adminService.delete(Number(id));
  }
}
