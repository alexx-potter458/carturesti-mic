import { Body, Controller, Delete, Get, Patch, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { getUserIdFromRequest } from '../utils/app.functions';
import { plainToClass } from 'class-transformer';
import { UserResponseDto } from './dtos/user-response.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('connected')
  public async getConnectedUser(
    @Req() request: Request,
  ): Promise<UserResponseDto> {
    const userId = getUserIdFromRequest(request);

    return plainToClass(
      UserResponseDto,
      await this.usersService.findUserById(userId),
    );
  }

  @Patch('update')
  public async updateUser(
    @Req() request: Request,
    @Body() userDto: UpdateUserDto,
  ) {
    const userId = getUserIdFromRequest(request);
    await this.usersService.update(userId, userDto);
  }

  @Delete('delete')
  public async hardDelete(@Req() request: Request) {
    const userId = getUserIdFromRequest(request);
    await this.usersService.hardDelete(userId);
  }
}
