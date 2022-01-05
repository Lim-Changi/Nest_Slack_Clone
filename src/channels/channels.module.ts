import { Module } from '@nestjs/common';
import { ChannelsService } from './channels.service';
import { ChannelsController } from './channels.controller';

@Module({
  imports: [],
  providers: [ChannelsService],
  controllers: [ChannelsController],
})
export class ChannelsModule {}
