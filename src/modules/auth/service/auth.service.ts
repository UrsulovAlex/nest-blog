import { Injectable } from '@nestjs/common';
import { AdminEntity } from '../../admin/model/admin.entity';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(AdminEntity)
    private adminRepository: Repository<AdminEntity>,
    private jwtService: JwtService,
  ) {}

  async validateAdmin(
    login: string,
    pass: string,
  ): Promise<AdminEntity | null> {
    const admin: AdminEntity = await this.adminRepository.findOne({
      where: { login },
    });

    if (admin && (await bcrypt.compare(pass, admin.passwordHash))) {
      const { ...secureAdmin } = admin;
      return secureAdmin;
    }

    return null;
  }

  async login(admin: AdminEntity) {
    const payload = {
      id: admin.id,
      role: admin.role,
    };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
