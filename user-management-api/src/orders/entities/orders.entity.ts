import { OrderStatusType } from '../../utils/app.constants';
import { User } from '../../users/entities/user.entity';
import { Address } from '../../addresses/entities/address.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OrderProduct } from './order-products.entity';

@Entity({ name: 'orders' })
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (User) => User.id, {
    cascade: false,
    eager: true,
    nullable: false,
  })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ nullable: false })
  total: number;

  @Column({ name: 'creation_date', nullable: false })
  creationDate: Date;

  @Column({ nullable: false })
  status: OrderStatusType;

  @OneToOne(() => Address, (Address) => Address.id, { eager: true })
  @JoinColumn({ name: 'address_id' })
  address: Address;

  @OneToMany((type) => OrderProduct, (OrderProduct) => OrderProduct.order, {
    eager: true,
  })
  orderProducts: OrderProduct[];
}
