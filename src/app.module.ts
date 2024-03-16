import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SoliguideModule1Module } from './soliguide-module1/soliguide-module1.module';
import { SoliguideModule2Module } from './soliguide-module2/soliguide-module2.module';
import { CommonModule } from './common/common.module';
import { CorrelationIdMiddleware } from './common/middlewares/correlation-id/correlation-id.middleware';

@Module({
  imports: [CommonModule, SoliguideModule1Module, SoliguideModule2Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(CorrelationIdMiddleware).forRoutes('**');
  }
}
