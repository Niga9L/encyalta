import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import Auth from './entitys/auth.entity';
import User from '../users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Auth]), TypeOrmModule.forFeature([User])],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
