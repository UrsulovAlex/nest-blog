import { Role } from 'src/modules/roles/roles.enum';
export declare class CreateAdminDto {
    readonly login: string;
    readonly passwordHash: string;
    readonly nickName: string;
    role: Role;
}
