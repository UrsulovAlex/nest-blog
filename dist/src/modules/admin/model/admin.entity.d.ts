import { PostEntity } from 'src/modules/post/model/post.entity';
import { Role } from 'src/modules/roles/roles.enum';
export declare class AdminEntity {
    id: number;
    login: string;
    passwordHash?: string;
    nickName: string;
    posts: PostEntity[];
    role: Role;
    createdAt: Date;
    updatedAt: Date;
}
