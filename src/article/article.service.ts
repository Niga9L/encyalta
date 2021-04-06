import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from './entitys/article.entity';
import { CreateArticleDto } from './dto/create-article.dto';
import User from '../users/entities/user.entity';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private _articleRepository: Repository<Article>,
  ) {}
  public async getAll() {
    return await this._articleRepository.find({
      relations: ['createdBy'],
    });
  }

  public async getById(id: string) {
    const article = await this._articleRepository.findOne(id);
    if (article) {
      return article;
    }
    throw new HttpException(
      'Запрашиваемая статья не найдена!',
      HttpStatus.NOT_FOUND,
    );
  }

  public async create(article: CreateArticleDto, user: User): Promise<Article> {
    const newArticle = this._articleRepository.create({
      ...article,
      createdBy: user,
    });
    try {
      await this._articleRepository.save(newArticle);
    } catch (e) {
      throw new HttpException('Произошла ошибка с сохранением статьи!', 406);
    }
    return newArticle;
  }
}
