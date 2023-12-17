import { OrderStatusType } from '../../utils/app.constants';
import { User } from '../../users/entities/user.entity';
import { Address } from '../../addresses/entities/address.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

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

  @OneToOne(() => Address, (Address) => Address.id)
  @JoinColumn({ name: 'address_id' })
  address: Address;
}
