import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { JWTAuthGuard, LocalAuthGuard } from '../service/local.strategy';
import { Repository } from 'typeorm';
import { AdminEntity } from '../../admin/model/admin.entity';
import { InjectRepository } from '@nestjs/typeorm';
@Controller('auth')
export class AuthController {
  constructor(
    @InjectRepository(AdminEntity)
    private adminRepository: Repository<AdminEntity>,
    private authService: AuthService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JWTAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @UseGuards(JWTAuthGuard)
  @Post('refresh')
  async refresh(@Request() req) {
    const admin = await this.adminRepository.findOne({
      where: { id: req.user.id },
    });
    return this.authService.login(admin);
  }
}
