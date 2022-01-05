import { Module } from '@nestjs/common';
import { DMsController } from './dms.controller';
import { DMsService } from './dms.service';

@Module({
  imports: [],
  controllers: [DMsController],
  providers: [DMsService],
})
export class DMsModule {}
