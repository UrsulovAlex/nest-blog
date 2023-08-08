"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category1687894537959 = void 0;
const category_entity_1 = require("../../src/modules/category/entities/category.entity");
class Category1687894537959 {
    async up(queryRunner) {
        const categoryRepository = queryRunner.connection.getRepository(category_entity_1.CategoryEntity);
        if (await categoryRepository.findOne({ where: { title: 'Angular' } })) {
            return;
        }
        const category_entity = categoryRepository.create({
            title: 'Angular',
        });
        await categoryRepository.save(category_entity);
    }
    async down(queryRunner) {
        const categoryRepository = queryRunner.connection.getRepository(category_entity_1.CategoryEntity);
        const category_entity = await categoryRepository.findOne({
            where: { title: 'Angular' },
        });
        if (!category_entity) {
            return;
        }
        await categoryRepository.remove(category_entity);
    }
}
exports.Category1687894537959 = Category1687894537959;
//# sourceMappingURL=1687894537959-category.js.map