import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Auth } from '../../auth/entities/auth.entity';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  email: string;

  @Column({ name: 'first_name', nullable: false })
  firstName: string;

  @Column({ name: 'last_name', nullable: false })
  lastName: string;

  @Column({ name: 'picture_url' })
  pictureUrl: string;

  @Column({ name: 'driving_license_expiry_date' })
  drivingLicenseExpiryDate: Date;

  @Column({ nullable: false })
  password: string;

  @OneToMany((type) => Auth, (token) => token.user)
  authTokens: Auth[];

  async validatePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
}
