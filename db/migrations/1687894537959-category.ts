import { CategoryEntity } from 'src/modules/category/entities/category.entity';
import { MigrationInterface, QueryRunner, Repository } from 'typeorm';

export class Category1687894537959 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const categoryRepository: Repository<CategoryEntity> =
      queryRunner.connection.getRepository(CategoryEntity);

    if (await categoryRepository.findOne({ where: { title: 'Angular' } })) {
      return;
    }
    const category_entity: CategoryEntity = categoryRepository.create({
      title: 'Angular',
    });

    await categoryRepository.save(category_entity);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const categoryRepository: Repository<CategoryEntity> =
      queryRunner.connection.getRepository(CategoryEntity);

    const category_entity: CategoryEntity = await categoryRepository.findOne({
      where: { title: 'Angular' },
    });

    if (!category_entity) {
      return;
    }

    await categoryRepository.remove(category_entity);
  }
}
