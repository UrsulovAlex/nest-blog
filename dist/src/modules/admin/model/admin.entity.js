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
exports.AdminEntity = void 0;
const class_transformer_1 = require("class-transformer");
const post_entity_1 = require("../../post/model/post.entity");
const roles_enum_1 = require("../../roles/roles.enum");
const typeorm_1 = require("typeorm");
let AdminEntity = class AdminEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], AdminEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, select: false }),
    __metadata("design:type", String)
], AdminEntity.prototype, "login", void 0);
__decorate([
    (0, typeorm_1.Column)({ select: true }),
    (0, class_transformer_1.Exclude)({ toPlainOnly: true }),
    __metadata("design:type", String)
], AdminEntity.prototype, "passwordHash", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], AdminEntity.prototype, "nickName", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => post_entity_1.PostEntity, (posts) => posts.author),
    __metadata("design:type", Array)
], AdminEntity.prototype, "posts", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'user' }),
    __metadata("design:type", String)
], AdminEntity.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], AdminEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ select: false }),
    __metadata("design:type", Date)
], AdminEntity.prototype, "updatedAt", void 0);
AdminEntity = __decorate([
    (0, typeorm_1.Entity)()
], AdminEntity);
exports.AdminEntity = AdminEntity;
//# sourceMappingURL=admin.entity.js.map