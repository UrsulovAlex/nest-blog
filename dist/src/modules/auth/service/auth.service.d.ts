import { AdminEntity } from '../../admin/model/admin.entity';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
export declare class AuthService {
    private adminRepository;
    private jwtService;
    constructor(adminRepository: Repository<AdminEntity>, jwtService: JwtService);
    validateAdmin(login: string, pass: string): Promise<AdminEntity | null>;
    login(admin: AdminEntity): Promise<{
        accessToken: string;
    }>;
}
