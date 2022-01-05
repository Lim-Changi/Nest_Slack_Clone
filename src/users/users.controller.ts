import {
  Body,
  Controller,
  NotFoundException,
  Post,
  Get,
  Response,
  ForbiddenException,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from 'src/common/decorators/user.decorator';
import { UserDTO } from 'src/common/dto/user.dto';
import { UndefinedToNullInterceptor } from 'src/common/interceptors/undefinedToNull.interceptor';
import { CreateUserRequestDto } from './dto/create.user.request.dto';
import { LoginRequestDto } from './dto/login.request.dto';
import { UsersService } from './users.service';

@UseInterceptors(UndefinedToNullInterceptor)
@ApiTags('USER')
@Controller('api/users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiResponse({
    type: UserDTO,
  })
  @ApiOperation({ summary: '내 정보 조회' })
  @Get()
  async getProfile(@User() user) {
    return user || false;
  }

  @ApiResponse({
    status: 200,
    description: '성공',
    type: UserDTO,
  })
  @ApiResponse({
    status: 500,
    description: '서버에러',
  })
  @ApiOperation({ summary: '로그인' })
  @Post('login')
  async login(@User() user) {
    return user;
  }

  @ApiOperation({ summary: '회원가입' })
  @Post()
  async join(@Body() data: CreateUserRequestDto) {
    await this.usersService.join(data.email, data.nickname, data.password);
  }

  @ApiOperation({ summary: '로그아웃' })
  @Post('logout')
  async logout(@Response() res) {
    res.clearCookie('connect.sid', { httpOnly: true });
    return res.send('ok');
  }
}
