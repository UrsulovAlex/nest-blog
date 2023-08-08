import { AdminEntity } from 'src/modules/admin/model/admin.entity';
import { MigrationInterface, QueryRunner, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Role } from 'src/modules/roles/roles.enum';

export class CreateAdmin1688721165475 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const adminRepositoy: Repository<AdminEntity> =
      queryRunner.connection.getRepository(AdminEntity);

    if (await adminRepositoy.findOne({ where: { login: 'AdminAlex' } })) {
      return;
    }

    const admin_entity: AdminEntity = adminRepositoy.create({
      login: 'AdminAlex',
      passwordHash: await bcrypt.hash('secret', 10),
      nickName: 'AdminAlex',
      role: Role.Admin,
    });

    await adminRepositoy.insert(admin_entity);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const adminRepositoy: Repository<AdminEntity> =
      queryRunner.connection.getRepository(AdminEntity);
    const admin_entity: AdminEntity = await adminRepositoy.findOne({
      where: { login: 'AlexAdmin' },
    });

    if (!admin_entity) {
        return;
    }

    await adminRepositoy.remove(admin_entity);
  }
}
