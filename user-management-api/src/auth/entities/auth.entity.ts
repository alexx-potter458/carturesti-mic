import { User } from '../../users/entities/user.entity';
import {
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'auth' })
export class Auth {
  @PrimaryGeneratedColumn()
  id: number;

  @PrimaryColumn({ nullable: false })
  token: string;

  @ManyToOne(() => User, (User) => User.id, {
    cascade: false,
    eager: true,
    nullable: false,
  })
  @JoinColumn({ name: 'user_id' })
  user: User;
}
