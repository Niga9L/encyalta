import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Article } from '../../article/entitys/article.entity';

@Entity('user')
class User {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column({ unique: true })
  public email: string;

  @Column()
  public name: string;

  @Column()
  public password: string;

  @OneToMany(() => Article, (article: Article) => article.createdBy)
  public articles?: Article[];

  @Column({ type: 'varchar', default: 'user' })
  role: string;
}
export default User;
