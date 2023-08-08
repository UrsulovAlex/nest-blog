import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentEntity } from './entities/comment.entity';
import { Repository } from 'typeorm/repository/Repository';
export declare class CommentsService {
    private commentRepository;
    constructor(commentRepository: Repository<CommentEntity>);
    create(createCommentDto: CreateCommentDto): Promise<CommentEntity>;
    findAllPostComments(id: number): Promise<CommentEntity[]>;
    findOne(id: number): Promise<CommentEntity>;
    update(id: number, updateCommentDto: UpdateCommentDto): Promise<CommentEntity>;
    remove(id: number): Promise<CommentEntity>;
}
