import { Module, forwardRef } from '@nestjs/common';
import { AdminModule } from '../admin/admin.module';
import { AuthService } from './service/auth.service';
import { LocalStrategy } from './service/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './controller/auth.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './service/jwt.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminEntity } from '../admin/model/admin.entity';

@Module({
  imports: [
    PassportModule,
    ConfigModule,
    AdminModule,
    TypeOrmModule.forFeature([AdminEntity]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: configService.get<string>('JWT_EXPIRES_IN') },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
