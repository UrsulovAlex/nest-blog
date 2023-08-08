import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryEntity } from './entities/category.entity';
import { Repository } from 'typeorm';
export declare class CategoryService {
    private categoryRepository;
    constructor(categoryRepository: Repository<CategoryEntity>);
    create(createCategoryDto: CreateCategoryDto): Promise<CategoryEntity>;
    findAll(): Promise<CategoryEntity[]>;
    findOne(id: number): Promise<CategoryEntity>;
    update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<CategoryEntity>;
    remove(id: number): Promise<CategoryEntity>;
}
