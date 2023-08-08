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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostEntity = void 0;
const admin_entity_1 = require("../../admin/model/admin.entity");
const category_entity_1 = require("../../category/entities/category.entity");
const comment_entity_1 = require("../../comments/entities/comment.entity");
const typeorm_1 = require("typeorm");
let PostEntity = class PostEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PostEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], PostEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, length: 12000 }),
    __metadata("design:type", String)
], PostEntity.prototype, "text", void 0);
__decorate([
    (0, typeorm_1.Column)({ select: false }),
    __metadata("design:type", Number)
], PostEntity.prototype, "authorPostsId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => admin_entity_1.AdminEntity, (author) => author.posts, { eager: true }),
    (0, typeorm_1.JoinColumn)([{ name: 'authorPostsId', referencedColumnName: 'id' }]),
    __metadata("design:type", admin_entity_1.AdminEntity)
], PostEntity.prototype, "author", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], PostEntity.prototype, "categoryId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => category_entity_1.CategoryEntity, (category) => category.categoryPosts, {
        eager: true,
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'categoryId', referencedColumnName: 'id' }]),
    __metadata("design:type", category_entity_1.CategoryEntity)
], PostEntity.prototype, "nameCategory", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PostEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PostEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ select: false }),
    __metadata("design:type", Number)
], PostEntity.prototype, "commentsId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => comment_entity_1.CommentEntity, (postComment) => postComment.commentPost),
    __metadata("design:type", Array)
], PostEntity.prototype, "postComments", void 0);
PostEntity = __decorate([
    (0, typeorm_1.Entity)()
], PostEntity);
exports.PostEntity = PostEntity;
//# sourceMappingURL=post.entity.js.map