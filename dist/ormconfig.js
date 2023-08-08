"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const admin_entity_1 = require("./src/modules/admin/model/admin.entity");
const post_entity_1 = require("./src/modules/post/model/post.entity");
const category_entity_1 = require("./src/modules/category/entities/category.entity");
const comment_entity_1 = require("./src/modules/comments/entities/comment.entity");
const dataSourceOptions = new typeorm_1.DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'blog_db',
    dropSchema: false,
    migrationsRun: false,
    logging: true,
    entities: [admin_entity_1.AdminEntity, post_entity_1.PostEntity, category_entity_1.CategoryEntity, comment_entity_1.CommentEntity],
    migrations: ['**/db/migrations/*.{ts, js}'],
    synchronize: true,
});
exports.default = dataSourceOptions;
//# sourceMappingURL=ormconfig.js.map