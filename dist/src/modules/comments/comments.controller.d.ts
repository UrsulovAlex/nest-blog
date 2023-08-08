import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
export declare class CommentsController {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    create(createCommentDto: CreateCommentDto): Promise<import("./entities/comment.entity").CommentEntity>;
    findAllPostComments(id: string): Promise<import("./entities/comment.entity").CommentEntity[]>;
    update(id: string, updateCommentDto: UpdateCommentDto): Promise<import("./entities/comment.entity").CommentEntity>;
    remove(id: string): Promise<import("./entities/comment.entity").CommentEntity>;
}
