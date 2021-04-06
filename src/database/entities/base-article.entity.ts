import {
  Column,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
  UpdateDateColumn,
} from 'typeorm';
import User from '../../users/entities/user.entity';
import { Article } from '../../article/entitys/article.entity';

export abstract class BaseArticleEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @Column({ type: 'boolean', default: false })
  isArchive: boolean;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createDateTime: Date;

  @Index('article_authorId')
  @ManyToOne(() => User, (author: User) => author.articles)
  public createdBy: User;

  @RelationId((article: Article) => article.createdBy)
  public createdById: number;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  lastChangeDateTime: Date;

  @Column({ type: 'varchar', length: 300, default: 'admin' })
  lastChangedBy: string;
}
