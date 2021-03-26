import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';

@Injectable()
export class ArticleService {
  getAll() {
    return ['Article1', 'Article2'];
  }

  async save(article: CreateArticleDto): Promise<CreateArticleDto> {
    return article;
  }
}
