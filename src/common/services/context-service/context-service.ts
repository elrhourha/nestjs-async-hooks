import { Injectable } from '@nestjs/common';
import { AsyncLocalStorage } from 'async_hooks';
import { Countries, DEFAULT_COUNTRY } from '../../entities/countries';

export type AppContext = {
  country: Countries;
  correlationId: string;
};

@Injectable()
export class ContextService {
  private readonly als: AsyncLocalStorage<AppContext>;

  constructor() {
    this.als = new AsyncLocalStorage();
  }

  getCountry(): Countries {
    return this.als.getStore()?.country;
  }

  setCountry(country: string): void {
    if (!Object.values(Countries).includes(country as Countries)) {
      console.log('Invalid country, using default country');
      this.als.getStore().country = DEFAULT_COUNTRY;
      return;
    }
    this.als.getStore().country = Countries[country];
  }

  getAsyncLocalStorage() {
    return this.als;
  }

  getStore(): AppContext {
    return this.als.getStore();
  }
}
