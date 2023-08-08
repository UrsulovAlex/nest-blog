"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAdmin1688721165475 = void 0;
const admin_entity_1 = require("../../src/modules/admin/model/admin.entity");
const bcrypt = require("bcrypt");
const roles_enum_1 = require("../../src/modules/roles/roles.enum");
class CreateAdmin1688721165475 {
    async up(queryRunner) {
        const adminRepositoy = queryRunner.connection.getRepository(admin_entity_1.AdminEntity);
        if (await adminRepositoy.findOne({ where: { login: 'AdminAlex' } })) {
            return;
        }
        const admin_entity = adminRepositoy.create({
            login: 'AdminAlex',
            passwordHash: await bcrypt.hash('secret', 10),
            nickName: 'AdminAlex',
            role: roles_enum_1.Role.Admin,
        });
        await adminRepositoy.insert(admin_entity);
    }
    async down(queryRunner) {
        const adminRepositoy = queryRunner.connection.getRepository(admin_entity_1.AdminEntity);
        const admin_entity = await adminRepositoy.findOne({
            where: { login: 'AlexAdmin' },
        });
        if (!admin_entity) {
            return;
        }
        await adminRepositoy.remove(admin_entity);
    }
}
exports.CreateAdmin1688721165475 = CreateAdmin1688721165475;
//# sourceMappingURL=1688721165475-createAdmin.js.map