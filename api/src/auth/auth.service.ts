import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Auth } from './entities/auth.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Auth)
    private readonly authRepository: Repository<Auth>,
  ) {}

  public async getAuthByToken(token: string): Promise<Auth> {
    return await this.authRepository.findOneBy({ token });
  }

  public async saveToken(token: string, user: User): Promise<void> {
    await this.authRepository.save({ token, user } as Auth);
  }

  public async deleteToken(token: string): Promise<void> {
    await this.authRepository.delete({ token });
  }
}
