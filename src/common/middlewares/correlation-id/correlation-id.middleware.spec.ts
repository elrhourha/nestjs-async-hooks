import { CorrelationIdMiddleware } from './correlation-id.middleware';
import { ContextService } from '../../services/context-service/context-service';

describe('CorrelationIdMiddleware', () => {
  it('should be defined', () => {
    const getStore = jest.fn();

    const contextService = {
      getStore,
    } as unknown as ContextService;

    expect(new CorrelationIdMiddleware(contextService)).toBeDefined();
  });
});
