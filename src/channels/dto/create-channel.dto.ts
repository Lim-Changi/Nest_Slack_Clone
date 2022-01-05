import { ApiProperty } from '@nestjs/swagger';

export class CreateChannelDto {
  @ApiProperty({
    example: 'chat',
    description: '채널명',
  })
  public name: string;
}
