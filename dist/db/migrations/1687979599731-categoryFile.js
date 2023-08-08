"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryFile1687979599731 = void 0;
const comment_entity_1 = require("../../src/modules/comments/entities/comment.entity");
class CategoryFile1687979599731 {
    async up(queryRunner) {
        const commentRepository = queryRunner.connection.getRepository(comment_entity_1.CommentEntity);
        if (await commentRepository.findOne({ where: { message: 'message firs comment' } })) {
            return;
        }
        const comment_entity = commentRepository.create({
            message: 'test nessage',
            userId: 1,
            postId: 1,
        });
        await commentRepository.save(comment_entity);
    }
    async down(queryRunner) {
        const commentRepository = queryRunner.connection.getRepository(comment_entity_1.CommentEntity);
        const comment_entity = await commentRepository.findOne({
            where: { message: 'message firs comment' },
        });
        if (!comment_entity) {
            return;
        }
        await commentRepository.remove(comment_entity);
    }
}
exports.CategoryFile1687979599731 = CategoryFile1687979599731;
//# sourceMappingURL=1687979599731-categoryFile.js.map