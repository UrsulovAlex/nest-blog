"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminDataSourceOptions = void 0;
const typeorm_1 = require("typeorm");
const admin_entity_1 = require("../../admin/model/admin.entity");
const post_entity_1 = require("../../post/model/post.entity");
const category_entity_1 = require("../../category/entities/category.entity");
const comment_entity_1 = require("../../comments/entities/comment.entity");
exports.AdminDataSourceOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'blog_db',
    dropSchema: false,
    migrationsRun: false,
    entities: [admin_entity_1.AdminEntity, post_entity_1.PostEntity, category_entity_1.CategoryEntity, comment_entity_1.CommentEntity],
    migrations: [],
    synchronize: true,
};
const dataSorceBace = new typeorm_1.DataSource(exports.AdminDataSourceOptions);
exports.default = dataSorceBace;
//# sourceMappingURL=admin-data-source.js.map