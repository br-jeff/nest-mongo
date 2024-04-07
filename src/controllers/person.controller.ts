import { Controller, Get } from '@nestjs/common';

@Controller('/person')
export class PersonController {
  @Get('/list')
  listPorductTeste() {
    return 'HERE';
  }
}
