import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { JwtAuthGuard } from 'src/guards/jwt-guard';
import { Request } from 'express';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  async getAllPost(@Req() req: Request) {
    const builder = await this.postService.queryBuilder();

    if (req.query.search) {
      builder.where(
        'post_entity.title LIKE :search OR post_entity.text LIKE :search',
        { search: `%${req.query.search}%` },
      );
    }

    if (req.query.categoryId) {
      builder.where('post_entity.categoryId LIKE :categoryId', {
        categoryId: `%${req.query.categoryId}%`,
      });
    }

    const sort: any = req.query.sort;

    if (sort) {
      builder.orderBy('post_entity.title', sort.toUpperCase());
    }

    const page: number = parseInt(req.query.page as any) || 0;
    const per_page = parseInt(req.query.per_page as any) || 4;
    const total = await builder.getCount();

    builder.offset((page - 1) * per_page).limit(per_page);

    return {
      data: await builder.getMany(),
      total,
      page,
      per_page,
      last_page: Math.ceil(total / per_page),
    };
  }

  @Get(':id')
  @UseInterceptors(ClassSerializerInterceptor)
  getOne(@Param('id') id: string) {
    return this.postService.findOne(+id);
  }

  @Put('update/:id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postService.updatePosts(+id, updatePostDto);
  }

  @Post('create')
  @UseGuards(JwtAuthGuard)
  createPost(@Body() createPostDto: CreatePostDto) {
    return this.postService.createPosts(createPostDto);
  }

  @Delete('delete/:id')
  @UseGuards(JwtAuthGuard)
  deletePost(@Param('id') id: string) {
    this.postService.remove(+id);
  }
}
