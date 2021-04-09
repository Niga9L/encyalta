import { Body, Get, Param, Post, UseGuards, Request } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ArticleService } from './article.service';
import { Article } from './entitys/article.entity';
import { CreateArticleDto } from './dto/create-article.dto';
import JwtAuthenticationGuard from 'src/jwt-passport/guards/jwt-authentication.guard';

@Controller('/article')
export class ArticleController {
  constructor(private readonly _articleService: ArticleService) {}
  @Get()
  getAll() {
    return this._articleService.getAll();
  }

  @Get(':id')
  getArticleById(@Param('id') id: string) {
    return this._articleService.getById(id);
  }

  @Post()
  @UseGuards(JwtAuthenticationGuard)
  async create(
    @Body() article: CreateArticleDto,
    @Request() request,
  ): Promise<Article> {
    const { user } = request;
    return await this._articleService.create(article, user);
  }
}
