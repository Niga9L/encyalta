import { Request } from 'express';
import Auth from '../../auth/entitys/auth.entity';

type UserRequest = Auth;

interface RequestWithUser extends Request {
  user: UserRequest;
}

export default RequestWithUser;
