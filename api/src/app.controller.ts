import { Body, Controller, Delete, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { SignUpUserDto } from './users/dtos/sign-up-user.dto';
import { SignInUserDto } from './users/dtos/sign-in-user.dto';
import { Public } from './auth/decorators/public.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Public()
  getHealthcheck(): string {
    return this.appService.healthcheck();
  }

  @Public()
  @Post('sign-up')
  async signup(@Body() signUpUserDto: SignUpUserDto): Promise<string> {
    return await this.appService.signUp(signUpUserDto);
  }

  @Public()
  @Post('sign-in')
  async signIn(@Body() signInDto: SignInUserDto) {
    return await this.appService.signIn(signInDto);
  }

  @Delete('sign-out')
  async signOut(@Req() request: Request) {
    const [type, token] =
      (request.headers as any)?.authorization?.split(' ') ?? [];

    if (type === 'Bearer') await this.appService.signOut(token);
  }
}
