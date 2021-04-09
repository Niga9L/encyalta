import { Request } from 'express';
import User from '../../users/entities/user.entity';

type UserRequest = {
  userId: number;
} & User;

interface RequestWithUser extends Request {
  user: UserRequest;
}

export default RequestWithUser;
