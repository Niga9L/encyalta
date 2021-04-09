import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthenticationService } from '../authentication.service';
import Auth from '../../auth/entitys/auth.entity';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private _authenticationService: AuthenticationService) {
    super({
      usernameField: 'email',
    });
  }
  async validate(email: string, password: string): Promise<Auth> {
    return this._authenticationService.getAuthenticatedUser(email, password);
  }
}
