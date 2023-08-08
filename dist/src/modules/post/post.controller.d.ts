import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Request } from 'express';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    getAllPost(req: Request): Promise<{
        data: import("./model/post.entity").PostEntity[];
        total: number;
        page: number;
        per_page: number;
        last_page: number;
    }>;
    getOne(id: string): Promise<import("./model/post.entity").PostEntity>;
    update(id: string, updatePostDto: UpdatePostDto): Promise<{
        title: string;
        text: string;
        authorPostsId: number;
        categoryId: number;
        comments: number;
        id: number;
        author: import("../admin/model/admin.entity").AdminEntity;
        nameCategory: import("../category/entities/category.entity").CategoryEntity;
        createdAt: Date;
        updatedAt: Date;
        commentsId: number;
        postComments: import("../comments/entities/comment.entity").CommentEntity[];
    } & import("./model/post.entity").PostEntity>;
    createPost(createPostDto: CreatePostDto): Promise<import("./model/post.entity").PostEntity>;
    deletePost(id: string): void;
}
