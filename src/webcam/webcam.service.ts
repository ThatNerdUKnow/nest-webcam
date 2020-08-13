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
    let cvCap = new cv.VideoCapture("/dev/video2");
    
        
   
    //console.log(cvCap.set(cv.CAP_PROP_FPS,60));
    
    console.log("Width: "+ cvCap.get(cv.CAP_PROP_FRAME_WIDTH));
    console.log("Height: " + cvCap.get(cv.CAP_PROP_FRAME_HEIGHT));
    console.log("Framerate: " + cvCap.get(cv.CAP_PROP_FPS))

    let interval = 1000 / cvCap.get(cv.CAP_PROP_FPS);
    //interval+=2;
    console.log(interval);
    //interval = 100
    
    setInterval(() => {
        
      //const frame = cvCap.read();
      try{
      const frame = cvCap.read()
        const image = cv.imencode('.jpg', frame).toString('base64');
        //console.log(image);
        this.server.emit('frame', image);
      }catch(err)
      {
        cvCap.reset();
        
        console.log("Frame dropped")
      }
        
      

      
      
    }, interval);
  }
}
