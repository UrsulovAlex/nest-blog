"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsService = void 0;
const common_1 = require("@nestjs/common");
const comment_entity_1 = require("./entities/comment.entity");
const Repository_1 = require("typeorm/repository/Repository");
const typeorm_1 = require("@nestjs/typeorm");
let CommentsService = class CommentsService {
    constructor(commentRepository) {
        this.commentRepository = commentRepository;
    }
    create(createCommentDto) {
        const comment = this.commentRepository.create(createCommentDto);
        return this.commentRepository.save(comment);
    }
    async findAllPostComments(id) {
        return await this.commentRepository.find({
            relations: { commentPost: true },
            where: { postId: id }
        });
    }
    async findOne(id) {
        try {
            return await this.commentRepository.findOne({
                select: {
                    commentPost: {
                        id: true,
                        title: true,
                        categoryId: true,
                    },
                },
                where: { id },
            });
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async update(id, updateCommentDto) {
        const updateComment = await this.findOne(id);
        return this.commentRepository.save(Object.assign(Object.assign({}, updateComment), updateCommentDto));
    }
    async remove(id) {
        const removComment = await this.findOne(id);
        return await this.commentRepository.remove(removComment);
    }
};
CommentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(comment_entity_1.CommentEntity)),
    __metadata("design:paramtypes", [Repository_1.Repository])
], CommentsService);
exports.CommentsService = CommentsService;
//# sourceMappingURL=comments.service.js.map