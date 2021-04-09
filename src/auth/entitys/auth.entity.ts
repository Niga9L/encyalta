import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import User from '../../users/entities/user.entity';

@Entity('auth')
class Auth {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ unique: true })
  public email: string;

  @Column()
  public password: string;

  @Column({ type: 'varchar', default: 'user' })
  public role: string;

  @OneToOne(() => User)
  @JoinColumn()
  public user: User;
}
export default Auth;
