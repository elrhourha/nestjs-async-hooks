import { Test, TestingModule } from '@nestjs/testing';
import { ControllerOneController } from './controller-one.controller';
import { CommonModule } from 'src/common/common.module';

describe('ControllerOneController', () => {
  let controller: ControllerOneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ControllerOneController],
      imports: [CommonModule],
    }).compile();

    controller = module.get<ControllerOneController>(ControllerOneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
