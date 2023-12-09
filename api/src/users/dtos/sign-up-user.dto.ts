import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class SignUpUserDto {
  @Expose()
  readonly firstName: string;

  @Expose()
  readonly lastName: string;

  @Expose()
  readonly email: string;

  @Expose()
  readonly password: string;

  @Expose()
  readonly isTermsAccepted: boolean;
}
