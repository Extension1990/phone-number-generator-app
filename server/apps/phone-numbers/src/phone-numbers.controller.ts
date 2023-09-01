import { Controller, Get } from '@nestjs/common';
import { PhoneNumbersService } from './phone-numbers.service';

@Controller()
export class PhoneNumbersController {
  constructor(private readonly phoneNumbersService: PhoneNumbersService) {}

  @Get()
  getHello(): string {
    return this.phoneNumbersService.getHello();
  }
}
