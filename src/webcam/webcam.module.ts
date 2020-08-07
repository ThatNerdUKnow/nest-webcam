import { Module } from '@nestjs/common';
import { WebcamController } from './webcam.controller';
import { WebcamService } from './webcam.service';

@Module({
  controllers: [WebcamController],
  providers: [WebcamService]
})
export class WebcamModule {}
