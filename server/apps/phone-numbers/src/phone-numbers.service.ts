import { Injectable } from '@nestjs/common';

@Injectable()
export class PhoneNumbersService {
  getHello(): string {
    return 'Hello World!';
  }
}
