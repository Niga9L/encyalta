import { Body, Get, Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';

@Controller('/article')
export class ArticleController {
  constructor(private readonly _articleService: ArticleService) {}
  @Get()
  async getAll(): Promise<string[]> {
    return this._articleService.getAll();
  }

  @Post()
  async create(
    @Body() createArticleDto: CreateArticleDto,
  ): Promise<CreateArticleDto> {
    return this._articleService.save({
      ...createArticleDto,
    });
  }
}
