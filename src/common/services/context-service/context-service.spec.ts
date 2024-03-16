import { Test, TestingModule } from '@nestjs/testing';
import { ContextService } from './context-service';

describe('ContextService', () => {
  let provider: ContextService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContextService],
    }).compile();

    provider = module.get<ContextService>(ContextService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
