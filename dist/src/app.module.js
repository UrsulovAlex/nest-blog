"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("./modules/auth/auth.module");
const config_1 = require("@nestjs/config");
const admin_data_source_1 = require("./modules/auth/data-source/admin-data-source");
const admin_menu_module_1 = require("./modules/admin-menu/admin-menu.module");
const post_module_1 = require("./modules/post/post.module");
const category_module_1 = require("./modules/category/category.module");
const comments_module_1 = require("./modules/comments/comments.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(admin_data_source_1.AdminDataSourceOptions),
            auth_module_1.AuthModule,
            config_1.ConfigModule.forRoot(),
            admin_menu_module_1.AdminMenuModule,
            post_module_1.PostModule,
            category_module_1.CategoryModule,
            comments_module_1.CommentsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map