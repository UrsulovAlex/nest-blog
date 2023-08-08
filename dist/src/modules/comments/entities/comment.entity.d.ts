import { PostEntity } from 'src/modules/post/model/post.entity';
export declare class CommentEntity {
    id: number;
    message: string;
    userId: number;
    postId: number;
    commentPost: PostEntity;
    createdAt: Date;
    updatedAt: Date;
}
