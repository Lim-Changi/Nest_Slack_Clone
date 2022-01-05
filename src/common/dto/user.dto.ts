import { ApiProperty } from '@nestjs/swagger';

export class UserDTO {
  @ApiProperty({
    required: true,
    example: 1,
    description: '아이디',
  })
  id: number;
}
