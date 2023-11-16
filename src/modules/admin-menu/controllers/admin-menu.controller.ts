import { Controller, UseGuards, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { IMenuModel } from '../responses/iMenuModel';
import { Role } from 'src/modules/roles/roles.enum';
import { Roles } from 'src/modules/roles/roles.decorator';


@Controller('menu')
export class AdminMenuController {
  @UseGuards(AuthGuard('jwt'))
  @Roles(Role.Admin)
  @Get()
  getMenu(): IMenuModel[] {
    return [
      {
        name: 'Dashboard',
        href: ['./'],
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
}
