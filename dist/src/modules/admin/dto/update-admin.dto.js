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
exports.UpdateAdmintDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const creat_admin_dto_1 = require("./creat-admin.dto");
const roles_enum_1 = require("../../roles/roles.enum");
class UpdateAdmintDto extends (0, swagger_1.PartialType)(creat_admin_dto_1.CreateAdminDto) {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MinLength)(3, {
        message: 'Text is too less more than 3 characters',
    }),
    __metadata("design:type", String)
], UpdateAdmintDto.prototype, "login", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MinLength)(5, {
        message: 'Text is too short less than 5 characters',
    }),
    __metadata("design:type", String)
], UpdateAdmintDto.prototype, "passwordHash", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MinLength)(3, {
        message: 'Text is too short less than 3 characters',
    }),
    __metadata("design:type", String)
], UpdateAdmintDto.prototype, "nickName", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateAdmintDto.prototype, "role", void 0);
exports.UpdateAdmintDto = UpdateAdmintDto;
//# sourceMappingURL=update-admin.dto.js.map