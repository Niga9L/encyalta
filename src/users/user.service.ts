import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import User from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private _userRepository: Repository<User>,
  ) {}

  async getByEmail(email: string) {
    const user = await this._userRepository.findOne({ email });
    if (user) {
      return user;
    }
    throw new HttpException(
      'Пользователь по данному e-mail не найден',
      HttpStatus.NOT_FOUND,
    );
  }

  async create(userData: CreateUserDto) {
    const newUser = this._userRepository.create(userData);
    await this._userRepository.save(newUser);
    return newUser;
  }
}
