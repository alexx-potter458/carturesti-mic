import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SignUpUserDto } from './dtos/sign-up-user.dto';
import * as bcrypt from 'bcryptjs';
import { plainToClass } from 'class-transformer';
import { UserDto } from './dtos/user.dto';
import { isPlainPasswordValid } from '../utils/app.functions';
import { ErrorKeys } from '../utils/app.errors';
import { UpdateUserDto } from './dtos/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepostory: Repository<User>,
  ) {}

  async create(signUpUserDto: SignUpUserDto): Promise<User> {
    const user = plainToClass(UserDto, signUpUserDto);

    const salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(user.password, salt);

    return await this.usersRepostory.save(user);
  }

  async findUserByEmail(email: string) {
    return await this.usersRepostory.findOneBy({ email });
  }

  async findUserById(id: number): Promise<User> {
    return await this.usersRepostory.findOneBy({ id });
  }

  async update(userId: number, userDto: UpdateUserDto): Promise<void> {
    const user = await this.findUserById(userId);

    if (
      (userDto.oldPassword && !userDto.password) ||
      (!userDto.oldPassword && userDto.password)
    )
      throw new HttpException(
        ErrorKeys.INVALID_PASSWORD,
        HttpStatus.BAD_REQUEST,
      );

    if (userDto.oldPassword && userDto.password) {
      if (!(await user.validatePassword(userDto.oldPassword)))
        throw new HttpException(
          ErrorKeys.INVALID_PASSWORD,
          HttpStatus.BAD_REQUEST,
        );

      if (!isPlainPasswordValid(userDto.password))
        throw new HttpException(
          ErrorKeys.NOT_SAFE_PASSWORD,
          HttpStatus.BAD_REQUEST,
        );

      const salt = await bcrypt.genSalt();
      userDto.password = await bcrypt.hash(userDto.password, salt);
    }

    await this.usersRepostory.save(
      plainToClass(UserDto, { ...user, ...userDto }),
    );
  }

  async hardDelete(userId: number) {
    await this.usersRepostory.delete(userId);
  }
}
