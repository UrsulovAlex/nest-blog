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
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const admin_entity_1 = require("../model/admin.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bcrypt_1 = require("../../../utils/bcrypt");
let AdminService = class AdminService {
    constructor(adminRepository) {
        this.adminRepository = adminRepository;
    }
    createUser(createAdminDto) {
        try {
            const passwordHash = (0, bcrypt_1.encodePassword)(createAdminDto.passwordHash);
            const newUser = this.adminRepository.create(Object.assign(Object.assign({}, createAdminDto), { passwordHash }));
            return this.adminRepository.save(newUser);
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async getAdmin(id) {
        return await this.adminRepository.findOne({
            relations: {
                posts: true,
            },
            where: { id },
        });
    }
    async updateUser(id, updateAdmintDto) {
        try {
            const usersUpdate = await this.adminRepository.findOne({ where: { id } });
            return this.adminRepository.save(Object.assign(Object.assign({}, usersUpdate), updateAdmintDto));
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async delete(id) {
        const user = await this.adminRepository.findOneBy({ id });
        return this.adminRepository.remove(user);
    }
};
AdminService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(admin_entity_1.AdminEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AdminService);
exports.AdminService = AdminService;
//# sourceMappingURL=admin.service.js.map