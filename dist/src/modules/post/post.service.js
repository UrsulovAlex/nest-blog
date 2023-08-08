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
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const post_entity_1 = require("./model/post.entity");
let PostService = class PostService {
    constructor(postRepository) {
        this.postRepository = postRepository;
    }
    getAllPost() {
        return this.postRepository.find({
            relations: {
                nameCategory: true,
                author: true,
            },
        });
    }
    async createPosts(createPostDto) {
        const newPosts = await this.postRepository.create(createPostDto);
        return this.postRepository.save(newPosts);
    }
    async findOne(id) {
        try {
            return await this.postRepository.findOne({
                where: { id },
                relations: {
                    nameCategory: true,
                    postComments: true,
                    author: true,
                },
            });
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async updatePosts(id, udatePostDto) {
        const postUpdate = await this.findOne(id);
        return this.postRepository.save(Object.assign(Object.assign({}, postUpdate), udatePostDto));
    }
    async remove(id) {
        const post = await this.findOne(id);
        return this.postRepository.remove(post);
    }
    async queryBuilder() {
        return this.postRepository
            .createQueryBuilder('post_entity')
            .leftJoinAndSelect('post_entity.author', 'admin_entity')
            .leftJoinAndSelect('post_entity.nameCategory', 'category_entity')
            .orderBy('post_entity.updatedAt', 'DESC');
    }
};
PostService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(post_entity_1.PostEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map