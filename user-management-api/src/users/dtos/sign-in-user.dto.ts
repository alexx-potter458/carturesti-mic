import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class SignInUserDto {
  @Expose()
  readonly email: string;

  @Expose()
  readonly password: string;
}
