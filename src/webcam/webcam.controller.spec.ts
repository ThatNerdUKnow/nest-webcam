import { Test, TestingModule } from '@nestjs/testing';
import { WebcamController } from './webcam.controller';

describe('Webcam Controller', () => {
  let controller: WebcamController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WebcamController],
    }).compile();

    controller = module.get<WebcamController>(WebcamController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
