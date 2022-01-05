import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor() {}

  async findByEmail(email: string) {
    return;
  }

  async join(email: string, nickname: string, password: string) {
    return true;
  }
}
