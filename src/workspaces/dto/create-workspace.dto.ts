import { ApiProperty } from '@nestjs/swagger';

export class CreateWorkspaceDto {
  @ApiProperty({
    example: 'WorkSpace',
    description: '워크스페이스명',
  })
  public workspace: string;

  @ApiProperty({
    example: 'url',
    description: 'url 주소',
  })
  public url: string;
}
