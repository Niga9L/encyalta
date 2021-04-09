import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Article } from '../../article/entitys/article.entity';
import Auth from '../../auth/entitys/auth.entity';

@Entity('user')
class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ unique: true })
  public email: string;

  @Column({ default: '' })
  public name: string;

  @OneToMany(() => Article, (article: Article) => article.createdBy)
  public articles?: Article[];

  @OneToOne(() => Auth, (auth) => auth.user)
  private auth: Auth;
}
export default User;
