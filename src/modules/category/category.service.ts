import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private categoryRepository: Repository<CategoryEntity>,
  ) {}
  create(createCategoryDto: CreateCategoryDto): Promise<CategoryEntity> {
    const category = this.categoryRepository.create(createCategoryDto);
    return this.categoryRepository.save(category);
  }

  async findAll(): Promise<any> {
    return await this.categoryRepository.find({
      relations: {
        categoryPosts: true,
      }
    });
  }

  async findOne(id: number): Promise<CategoryEntity> {
    return await this.categoryRepository.findOne({ where: { id } });
  }

  async update(
    id: number,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<CategoryEntity> {
    const updateCategory = await this.findOne(id);
    return this.categoryRepository.save({
      ...updateCategory,
      ...updateCategoryDto,
    });
  }

  async remove(id: number): Promise<CategoryEntity> {
    const removeCategory = await this.findOne(id);
    return await this.categoryRepository.remove(removeCategory);
  }

  async queryBuilderCounterPost() {
    return await this.categoryRepository
      .createQueryBuilder('category_entity')
      .loadRelationCountAndMap('category_entity.categoryPostsCount', 'category_entity.categoryPosts')
      .getMany();
  }
}
