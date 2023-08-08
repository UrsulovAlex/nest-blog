import { AdminService } from '../../service/admin.service';
import { CreateAdminDto } from '../../dto/creat-admin.dto';
import { UpdateAdmintDto } from '../../dto/update-admin.dto';
export declare class AdminController {
    private adminService;
    constructor(adminService: AdminService);
    getOne(id: string): Promise<import("../../model/admin.entity").AdminEntity>;
    createUser(createAdminDto: CreateAdminDto): Promise<import("../../model/admin.entity").AdminEntity>;
    update(id: string, updateAdmintDto: UpdateAdmintDto): Promise<import("../../model/admin.entity").AdminEntity>;
    deleteUser(id: string): Promise<import("../../model/admin.entity").AdminEntity>;
}
