import { Test, TestingModule } from '@nestjs/testing';
import { ControllerTwoController } from './controller-two.controller';
import { CommonModule } from 'src/common/common.module';

describe('ControllerTwoController', () => {
  let controller: ControllerTwoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ControllerTwoController],
      imports: [CommonModule],
    }).compile();

    controller = module.get<ControllerTwoController>(ControllerTwoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
