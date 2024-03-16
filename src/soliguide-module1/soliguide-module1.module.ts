import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ControllerOneController } from './controller-one/controller-one.controller';
import { CountryMiddleware } from 'src/common/middlewares/country-middleware/country.middleware';

@Module({
  controllers: [ControllerOneController],
})
export class SoliguideModule1Module implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(CountryMiddleware).forRoutes('**');
  }
}
