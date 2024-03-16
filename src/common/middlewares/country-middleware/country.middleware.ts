import { Injectable, NestMiddleware } from '@nestjs/common';
import {
  AppContext,
  ContextService,
} from '../../services/context-service/context-service';
import { Countries } from '../../entities/countries';

@Injectable()
export class CountryMiddleware implements NestMiddleware {
  constructor(private readonly contextService: ContextService) {}
  use(req: any, res: any, next: () => void) {
    const store: AppContext = this.contextService.getStore();
    const countryHeader = req.headers['x-country'];
    const country = countryHeader?.toUpperCase();

    if (!Object.values(Countries).includes(country as Countries)) {
      console.log('Invalid country, using default country');
    } else {
      store.country = Countries[country];
    }

    next();
  }
}
