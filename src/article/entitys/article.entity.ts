import { Entity, Column } from 'typeorm';
import { BaseArticleEntity } from '../../database/entities/base-article.entity';

@Entity({ name: 'article' })
export class Article extends BaseArticleEntity {
  @Column({ type: 'varchar', length: 5000 })
  public text: string;

  @Column({ type: 'varchar', length: 300 })
  public title: string;

  @Column({ type: 'varchar', length: 300 })
  public theme: string;

  @Column({ type: 'numeric' })
  public year: number;
}
