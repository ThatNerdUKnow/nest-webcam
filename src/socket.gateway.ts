import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import {WebcamService} from '../src/webcam/webcam.service'
import { Server } from 'http';

@WebSocketGateway()
export class SocketGateway {
constructor(private webCam:WebcamService)
{}



@WebSocketServer()
server:Server;


  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    return 'Hello world!';
  }
}
