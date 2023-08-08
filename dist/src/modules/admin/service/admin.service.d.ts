import { AdminEntity } from '../model/admin.entity';
import { Repository } from 'typeorm';
import { CreateAdminDto } from '../dto/creat-admin.dto';
import { UpdateAdmintDto } from '../dto/update-admin.dto';
export declare class AdminService {
    private adminRepository;
    constructor(adminRepository: Repository<AdminEntity>);
    createUser(createAdminDto: CreateAdminDto): Promise<AdminEntity>;
    getAdmin(id: number): Promise<AdminEntity>;
    updateUser(id: number, updateAdmintDto: UpdateAdmintDto): Promise<AdminEntity>;
    delete(id: number): Promise<AdminEntity>;
}
