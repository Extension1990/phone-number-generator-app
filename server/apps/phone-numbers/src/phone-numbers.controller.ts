/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { PhoneNumbersService } from './phone-numbers.service';
import { PhoneNumber } from '../schemas/phone-number.schema';
import { PhoneNumberCreateDto } from '../dto/PhoneNumberCreate.dto';

@Controller('api/phone-numbers')
export class PhoneNumbersController {
  constructor(private readonly phoneNumbersService: PhoneNumbersService) {}

  // Get phone numbers from database
  @Get()
  async getPhoneNumbers(): Promise<PhoneNumber[]> {
    return await this.phoneNumbersService.getCountryPhoneNumbers();
  }
  
  // Store phone number in the database
  @Post()
  async storePhoneNumbers(@Body() phoneNumberCreatedto: PhoneNumberCreateDto): Promise<PhoneNumber> {
      return this.phoneNumbersService.storePhoneNumbers(phoneNumberCreatedto);
  }
}
