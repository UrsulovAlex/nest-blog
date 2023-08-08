import { PostEntity } from 'src/modules/post/model/post.entity';
export declare class CategoryEntity {
    id: number;
    title: string;
    categoryPosts: PostEntity[];
}
