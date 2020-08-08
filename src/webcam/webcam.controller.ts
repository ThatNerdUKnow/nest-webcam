import { Controller, Get } from '@nestjs/common';
import { WebcamService } from './webcam.service';

@Controller('webcam')
export class WebcamController {

    constructor(private webCam:WebcamService)
    {}
    @Get()
    start()
    {
        this.webCam.getCam();
        return "Hello";
    }
}
