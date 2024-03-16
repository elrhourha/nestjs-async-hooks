import { Injectable, NestMiddleware } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import {
  AppContext,
  ContextService,
} from '../../services/context-service/context-service';
import { DEFAULT_COUNTRY } from '../../entities/countries';

@Injectable()
export class CorrelationIdMiddleware implements NestMiddleware {
  constructor(private readonly contextService: ContextService) {}
  use(req: any, res: any, next: () => void) {
    const correlationId = req.headers['x-correlation-id'] ?? uuidv4();

    if (correlationId) {
      res.setHeader('x-correlation-id', correlationId);
    }

    const store: AppContext = this.contextService.getStore() ?? {
      correlationId,
      country: DEFAULT_COUNTRY,
    };

    this.contextService.getAsyncLocalStorage().run(store, () => next());
  }
}
