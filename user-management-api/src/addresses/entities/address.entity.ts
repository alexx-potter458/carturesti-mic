import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'addresses' })
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  city: string;

  @Column({ nullable: false })
  country: string;

  @Column({ nullable: false })
  county: string;

  @Column({ name: 'address_line', nullable: false })
  addressLine: string;
}
