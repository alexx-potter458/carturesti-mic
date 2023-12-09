import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class UpdateUserDto {
  @Expose()
  id: number;

  @Expose()
  email: string;

  @Expose()
  firstName: string;

  @Expose()
  lastName: string;

  @Expose()
  pictureUrl: string;

  @Expose()
  drivingLicenseExpiryDate: Date;

  @Expose()
  oldPassword: string;

  @Expose()
  password: string;
}
