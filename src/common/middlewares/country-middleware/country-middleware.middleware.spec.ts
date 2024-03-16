import { CountryMiddleware } from './country.middleware';
import { ContextService } from '../../services/context-service/context-service';

describe('CountryMiddlewareMiddleware', () => {
  it('should be defined', () => {
    const getStore = jest.fn();

    const contextService = {
      getStore,
    } as unknown as ContextService;

    expect(new CountryMiddleware(contextService)).toBeDefined();
  });
});
