import { Test, TestingModule } from '@nestjs/testing';
import { WebcamService } from './webcam.service';

describe('WebcamService', () => {
  let service: WebcamService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WebcamService],
    }).compile();

    service = module.get<WebcamService>(WebcamService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
