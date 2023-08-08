"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Newadmin1688730236882 = void 0;
const admin_entity_1 = require("../../src/modules/admin/model/admin.entity");
const bcrypt = require("bcrypt");
const roles_enum_1 = require("../../src/modules/roles/roles.enum");
class Newadmin1688730236882 {
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
exports.Newadmin1688730236882 = Newadmin1688730236882;
//# sourceMappingURL=1688730236882-newadmin.js.map