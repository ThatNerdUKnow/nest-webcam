import { Injectable } from '@nestjs/common';
import * as cv from 'opencv4nodejs';
import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'http';

@Injectable()
@WebSocketGateway()
export class WebcamService {
  @WebSocketServer()
  server: Server;

  getCam() {}

  onModuleInit() {
    let cvCap = new cv.VideoCapture(0);
    //cvCap.set(cv.CAP_PROP_FRAME_WIDTH,300);
    // cvCap.set(cv.CAP_PROP_FRAME_HEIGHT,300);
    let interval = 1000 / cvCap.get(cv.CAP_PROP_FPS);

    setInterval(() => {
      //const frame = cvCap.read();
      const frameAsync = cvCap.readAsync().then(frame => {
        const image = cv.imencode('.jpg', frame).toString('base64');
        //console.log(image);
        this.server.emit('frame', image);
       
        console.count("Frame\t");
      });

      
      console.count("Interval\t");
    }, interval);
  }
}
