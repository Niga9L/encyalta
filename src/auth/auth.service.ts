import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CreateUserDto from './dto/create-user.dto';
import Auth from './entitys/auth.entity';
import User from '../users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Auth)
    private _authRepository: Repository<Auth>,
    @InjectRepository(User)
    private _userRepository: Repository<User>,
  ) {}

  async getByEmail(email: string) {
    const user = await this._authRepository.findOne({
      where: { email },
      relations: ['user'],
    });
    if (user) {
      return user;
    }
    throw new HttpException(
      'Пользователь по данному e-mail не найден',
      HttpStatus.NOT_FOUND,
    );
  }

  async getById(id: number) {
    const user = this._authRepository.findOne({ id });
    if (user) {
      return user;
    }
    throw new HttpException('Пользователь не найден', HttpStatus.NOT_FOUND);
  }

  async create(userData: CreateUserDto) {
    const newAuth = await this._authRepository.create(userData);
    const newUser = await this._userRepository.create({
      email: userData.email,
    });
    await this._userRepository.save(newUser);
    newAuth.user = newUser;
    await this._authRepository.save(newAuth);
    return newAuth;
  }
}
