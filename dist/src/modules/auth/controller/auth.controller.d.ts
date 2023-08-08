import { AuthService } from '../service/auth.service';
import { Repository } from 'typeorm';
import { AdminEntity } from '../../admin/model/admin.entity';
export declare class AuthController {
    private adminRepository;
    private authService;
    constructor(adminRepository: Repository<AdminEntity>, authService: AuthService);
    login(req: any): Promise<{
        accessToken: string;
    }>;
    getProfile(req: any): any;
    refresh(req: any): Promise<{
        accessToken: string;
    }>;
}
