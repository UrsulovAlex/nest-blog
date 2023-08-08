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
exports.AdminMenuController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const roles_enum_1 = require("../../roles/roles.enum");
const roles_decorator_1 = require("../../roles/roles.decorator");
let AdminMenuController = class AdminMenuController {
    getMenu() {
        return [
            {
                name: 'Dashboard',
                href: ['dashboard'],
                icon: 'dashboard',
            },
            {
                name: 'Contents',
                children: [
                    {
                        name: 'Pages',
                        href: ['grid', 'content', 'page'],
                    },
                    {
                        name: 'Posts',
                        href: ['grid', 'content', 'posts'],
                    },
                    {
                        name: 'Comments',
                        href: ['grid', 'content', 'comments'],
                    },
                ],
            },
            {
                name: 'Accaunts',
                icon: 'perm_identity',
                children: [
                    {
                        name: 'Admins',
                        icon: 'manage_accounts',
                        href: ['grid', 'accounts', 'admin'],
                    },
                    {
                        name: 'Users',
                        icon: 'face',
                        href: ['grid', 'accounts', 'users'],
                    },
                ],
            },
            {
                name: 'Settings',
                icon: 'settings',
                children: [
                    {
                        name: 'General',
                        href: ['form', 'settings', 'general'],
                    },
                    {
                        name: 'Catalog',
                        href: ['form', 'settings', 'catalog'],
                    },
                ],
            },
        ];
    }
};
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.Admin),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], AdminMenuController.prototype, "getMenu", null);
AdminMenuController = __decorate([
    (0, common_1.Controller)('menu')
], AdminMenuController);
exports.AdminMenuController = AdminMenuController;
//# sourceMappingURL=admin-menu.controller.js.map