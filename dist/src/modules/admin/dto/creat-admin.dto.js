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
exports.CreateAdminDto = void 0;
const class_validator_1 = require("class-validator");
const roles_enum_1 = require("../../roles/roles.enum");
class CreateAdminDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'must Be No tEmpty' }),
    (0, class_validator_1.MinLength)(3, {
        message: 'Text is too less more than 3 characters',
    }),
    __metadata("design:type", String)
], CreateAdminDto.prototype, "login", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'must Be No tEmpty' }),
    (0, class_validator_1.MinLength)(5, {
        message: 'Text is too short less than 10 characters',
    }),
    __metadata("design:type", String)
], CreateAdminDto.prototype, "passwordHash", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'must Be No tEmpty' }),
    (0, class_validator_1.MinLength)(3, {
        message: 'Text is too short less than 3 characters',
    }),
    __metadata("design:type", String)
], CreateAdminDto.prototype, "nickName", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateAdminDto.prototype, "role", void 0);
exports.CreateAdminDto = CreateAdminDto;
//# sourceMappingURL=creat-admin.dto.js.map