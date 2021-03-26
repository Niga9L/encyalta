import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';

@Module({
  exports: [ArticleModule],
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleModule {}
