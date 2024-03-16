import { Global, Module } from '@nestjs/common';
import { ContextService } from './services/context-service/context-service';
import { CountryMiddleware } from './middlewares/country-middleware/country.middleware';

@Global()
@Module({
  providers: [ContextService, CountryMiddleware],
  exports: [ContextService, CountryMiddleware],
})
export class CommonModule {}
