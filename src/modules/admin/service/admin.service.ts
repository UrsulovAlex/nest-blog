import { Injectable } from '@nestjs/common';
import { AdminEntity } from '../model/admin.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAdminDto } from '../dto/creat-admin.dto';
import { UpdateAdmintDto } from '../dto/update-admin.dto';
import { encodePassword } from 'src/utils/bcrypt';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(AdminEntity)
    private adminRepository: Repository<AdminEntity>,
  ) {}

  createUser(createAdminDto: CreateAdminDto): Promise<AdminEntity> {
    try {
      const passwordHash = encodePassword(createAdminDto.passwordHash);
      const newUser = this.adminRepository.create({
        ...createAdminDto,
        passwordHash,
      });
      return this.adminRepository.save(newUser);
    } catch (error) {
      throw new Error(error);
    }
  }

  async getAdmin(id: number): Promise<AdminEntity> {
    return await this.adminRepository.findOne({
      relations: {
        posts: true,
      },
      where: { id },
    });
  }

  async updateUser(
    id: number,
    updateAdmintDto: UpdateAdmintDto,
  ): Promise<AdminEntity> {
    try {
      const usersUpdate = await this.adminRepository.findOne({ where: { id } });
      return this.adminRepository.save({
        ...usersUpdate,
        ...updateAdmintDto,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(id: number) {
    const user = await this.adminRepository.findOneBy({ id });
    return this.adminRepository.remove(user);
  }
}
