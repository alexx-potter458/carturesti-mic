import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Order } from './orders.entity';

@Entity({ name: 'order_products' })
export class OrderProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Order, (Order) => Order.id)
  @JoinColumn({ name: 'order_id' })
  order: Order;

  @Column({ name: 'book_id' })
  bookId: number;

  @Column()
  quantity: number;

  title: any;
}
