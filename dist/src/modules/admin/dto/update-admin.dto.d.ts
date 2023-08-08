import { CreateAdminDto } from './creat-admin.dto';
import { Role } from 'src/modules/roles/roles.enum';
declare const UpdateAdmintDto_base: import("@nestjs/common").Type<Partial<CreateAdminDto>>;
export declare class UpdateAdmintDto extends UpdateAdmintDto_base {
    readonly login: string;
    readonly passwordHash: string;
    readonly nickName: string;
    role: Role;
}
export {};
