import { AdminEntity } from 'src/modules/admin/model/admin.entity';
import { CategoryEntity } from 'src/modules/category/entities/category.entity';
import { CommentEntity } from 'src/modules/comments/entities/comment.entity';
export declare class PostEntity {
    id: number;
    title: string;
    text: string;
    authorPostsId: number;
    author: AdminEntity;
    categoryId: number;
    nameCategory: CategoryEntity;
    createdAt: Date;
    updatedAt: Date;
    commentsId: number;
    postComments: CommentEntity[];
}
