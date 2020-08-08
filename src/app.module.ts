import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebcamModule } from './webcam/webcam.module';
import { SocketGateway } from './socket.gateway';
import { WebcamService } from './webcam/webcam.service';

@Module({
  imports: [WebcamModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
