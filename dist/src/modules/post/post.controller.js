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
exports.PostController = void 0;
const common_1 = require("@nestjs/common");
const post_service_1 = require("./post.service");
const create_post_dto_1 = require("./dto/create-post.dto");
const update_post_dto_1 = require("./dto/update-post.dto");
const jwt_guard_1 = require("../../guards/jwt-guard");
let PostController = class PostController {
    constructor(postService) {
        this.postService = postService;
    }
    async getAllPost(req) {
        const builder = await this.postService.queryBuilder();
        if (req.query.search) {
            console.log('search', req.query.search);
            builder.where('post_entity.title LIKE :search OR post_entity.text LIKE :search', { search: `%${req.query.search}%` });
        }
        if (req.query.categoryId) {
            builder.where('post_entity.categoryId LIKE :categoryId', {
                categoryId: `%${req.query.categoryId}%`,
            });
        }
        const sort = req.query.sort;
        if (sort) {
            builder.orderBy('post_entity.title', sort.toUpperCase());
        }
        const page = parseInt(req.query.page) || 0;
        const per_page = parseInt(req.query.per_page) || 4;
        const total = await builder.getCount();
        builder.offset((page - 1) * per_page).limit(per_page);
        return {
            data: await builder.getMany(),
            total,
            page,
            per_page,
            last_page: Math.ceil(total / per_page),
        };
    }
    getOne(id) {
        return this.postService.findOne(+id);
    }
    update(id, updatePostDto) {
        return this.postService.updatePosts(+id, updatePostDto);
    }
    createPost(createPostDto) {
        return this.postService.createPosts(createPostDto);
    }
    deletePost(id) {
        this.postService.remove(+id);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "getAllPost", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "getOne", null);
__decorate([
    (0, common_1.Put)('update/:id'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_post_dto_1.UpdatePostDto]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "update", null);
__decorate([
    (0, common_1.Post)('create'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_post_dto_1.CreatePostDto]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "createPost", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "deletePost", null);
PostController = __decorate([
    (0, common_1.Controller)('post'),
    __metadata("design:paramtypes", [post_service_1.PostService])
], PostController);
exports.PostController = PostController;
//# sourceMappingURL=post.controller.js.map