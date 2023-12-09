import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class UserDto {
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
  password: string;
}
