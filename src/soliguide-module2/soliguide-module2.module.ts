import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ControllerTwoController } from './controller-two/controller-two.controller';
import { CountryMiddleware } from 'src/common/middlewares/country-middleware/country.middleware';

@Module({
  controllers: [ControllerTwoController],
})
export class SoliguideModule2Module implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(CountryMiddleware).forRoutes('**');
  }
}
