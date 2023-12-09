import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from './users/users.service';
import { SignUpUserDto } from './users/dtos/sign-up-user.dto';
import { SignInUserDto } from './users/dtos/sign-in-user.dto';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from './auth/auth.service';
import { ErrorKeys } from './utils/app.errors';
import { isEmailValid, isPlainPasswordValid } from './utils/app.functions';

@Injectable()
export class AppService {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  healthcheck(): string {
    return 'Server is running!';
  }

  async signUp(signUpUserDto: SignUpUserDto): Promise<string> {
    await this.validateSignUp(signUpUserDto);

    const user = await this.usersService.create(signUpUserDto);

    if (user) {
      return await this.signIn({
        email: signUpUserDto.email,
        password: signUpUserDto.password,
      } as SignInUserDto);
    }

    return null;
  }

  async signIn(signInUserDto: SignInUserDto): Promise<string> {
    const { email, password } = signInUserDto;
    const user = await this.usersService.findUserByEmail(email);

    if (!user)
      throw new HttpException(
        ErrorKeys.INVALID_CREDENTIALS,
        HttpStatus.UNAUTHORIZED,
      );

    const passwordIsValid = await user.validatePassword(password);

    if (!passwordIsValid)
      throw new HttpException(
        ErrorKeys.INVALID_CREDENTIALS,
        HttpStatus.UNAUTHORIZED,
      );

    const tokenContent = { userId: user.id };
    const token = await this.jwtService.signAsync(tokenContent);

    await this.authService.saveToken(token, user);

    return token;
  }

  async signOut(token: string): Promise<void> {
    await this.authService.deleteToken(token);
  }

  private async validateSignUp(dto: SignUpUserDto): Promise<void> {
    if (await this.usersService.findUserByEmail(dto.email))
      throw new HttpException(ErrorKeys.EMAIL_IN_USE, HttpStatus.CONFLICT);

    if (!isEmailValid(dto.email))
      throw new HttpException(ErrorKeys.INVALID_EMAIL, HttpStatus.BAD_REQUEST);

    if (!isPlainPasswordValid(dto.password))
      throw new HttpException(
        ErrorKeys.NOT_SAFE_PASSWORD,
        HttpStatus.BAD_REQUEST,
      );

    if (dto.firstName === '' || dto.lastName == '')
      throw new HttpException(
        ErrorKeys.INCOMPLETE_NAME,
        HttpStatus.BAD_REQUEST,
      );

    if (!dto.isTermsAccepted)
      throw new HttpException(
        ErrorKeys.TERMS_NOT_ACCEPTED,
        HttpStatus.BAD_REQUEST,
      );
  }
}
