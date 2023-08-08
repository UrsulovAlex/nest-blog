import { Repository } from 'typeorm';
import { PostEntity } from './model/post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { AdminEntity } from '../admin/model/admin.entity';
export declare class PostService {
    private postRepository;
    constructor(postRepository: Repository<PostEntity>);
    getAllPost(): Promise<PostEntity[]>;
    createPosts(createPostDto: CreatePostDto): Promise<PostEntity>;
    findOne(id: number): Promise<PostEntity>;
    updatePosts(id: number, udatePostDto: UpdatePostDto): Promise<{
        title: string;
        text: string;
        authorPostsId: number;
        categoryId: number;
        comments: number;
        id: number;
        author: AdminEntity;
        nameCategory: import("../category/entities/category.entity").CategoryEntity;
        createdAt: Date;
        updatedAt: Date;
        commentsId: number;
        postComments: import("../comments/entities/comment.entity").CommentEntity[];
    } & PostEntity>;
    remove(id: number): Promise<PostEntity>;
    queryBuilder(): Promise<import("typeorm").SelectQueryBuilder<PostEntity>>;
}
