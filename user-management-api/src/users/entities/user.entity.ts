import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { Auth } from '../../auth/entities/auth.entity';
import { Order } from '../../orders/entities/orders.entity';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  email: string;

  @Column({ name: 'first_name', nullable: false })
  firstName: string;

  @Column({ name: 'last_name', nullable: false })
  lastName: string;

  @Column({ nullable: false })
  password: string;

  @Column({ name: 'is_admin', nullable: false })
  isAdmin: boolean;

  @OneToMany((type) => Auth, (token) => token.user)
  authTokens: Auth[];

  @OneToMany((type) => Order, (order) => order.user)
  orders: Order[];

  async validatePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
}
