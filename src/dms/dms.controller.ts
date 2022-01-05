import { ParseIntPipe } from '@nestjs/common';
import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { DMsService } from './dms.service';

@ApiTags('DM')
@Controller('api/workspaces')
export class DMsController {
  constructor(private dmsService: DMsService) {}

  @Get(':url/dms')
  async getWorkspaceChannels(@Param('url') url) {
    return this.dmsService.getWorkspaceDMs(url, null);
  }

  @ApiParam({
    name: 'url',
    required: true,
    description: 'WorkSpace URL',
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: '사용자 id',
  })
  @ApiQuery({
    name: 'perPage',
    required: true,
    description: '한 번에 가져오는 개수',
  })
  @ApiQuery({
    name: 'page',
    required: true,
    description: '불러올 페이지',
  })
  @Get(':url/dms/:id/chats')
  async getWorkspaceDMChats(
    @Param('url') url,
    @Param('id', ParseIntPipe) id: number,
    @Query('perPage', ParseIntPipe) perPage: number,
    @Query('page', ParseIntPipe) page: number,
  ) {
    return this.dmsService.getWorkspaceDMChats(url, id, null, perPage, page);
  }

  @Post(':url/dms/:id/chats')
  async createWorkspaceDMChats(
    @Param('url') url,
    @Param('id', ParseIntPipe) id: number,
    @Body('content') content,
  ) {
    return this.dmsService.createWorkspaceDMChats(url, content, id, null);
  }

  @Post(':url/dms/:id/images')
  async createWorkspaceDMImages(
    @Param('url') url,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.dmsService.createWorkspaceDMImages(url, null, id, null);
  }

  @Get(':url/dms/:id/unreads')
  async getUnreads(
    @Param('url') url,
    @Param('id', ParseIntPipe) id: number,
    @Query('after', ParseIntPipe) after: number,
  ) {
    return this.dmsService.getDMUnreadsCount(url, id, null, after);
  }
}
