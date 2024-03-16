import { Controller, Get } from '@nestjs/common';
import { ContextService } from 'src/common/services/context-service/context-service';

@Controller('controller-one')
export class ControllerOneController {
  constructor(private readonly contextService: ContextService) {}
  @Get()
  public sayHello(): string {
    const currentCountry = this.contextService.getCountry();
    return `Hello World from ControllerOneController, current country: ${currentCountry} !`;
  }
}
