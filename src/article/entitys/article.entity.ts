import { Column, Entity } from 'typeorm';
import { BaseArticleEntity } from '../../database/entities/base-article.entity';

@Entity('article')
export class Article extends BaseArticleEntity {
  @Column({ type: 'varchar', length: 5000 })
  public textext: string;

  @Column({ type: 'varchar', length: 300 })
  public title: string;

  @Column({ type: 'varchar', length: 300 })
  public theme: string;

  @Column({ type: 'number' })
  public year: number;

  @Column({ type: 'array' })
  public tags: string[];
}
