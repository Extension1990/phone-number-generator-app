/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PhoneNumberRepository } from './phone-numbers.repository';
import { PhoneNumber } from '../schemas/phone-number.schema';
import { PhoneNumberCreateDto } from '../dto/PhoneNumberCreate.dto';
import { PhoneNumberSearchDto } from '../dto/PhoneNumvberSearch.dto';

@Injectable()
export class PhoneNumbersService {
  constructor(private phoneNumberRepository: PhoneNumberRepository) {}
  
  // Store phone numbers
  async storePhoneNumbers(phoneNumberCreatedto: PhoneNumberCreateDto): Promise<PhoneNumber> {
    return await this.phoneNumberRepository.storePhoneNumbers(phoneNumberCreatedto);
  }

  // Get all stored phone numbers
  async getPhoneNumbers(): Promise<PhoneNumber[]> {
    return await this.phoneNumberRepository.getCountryPhoneNumbers();
  }

  // Find phone numbers by country
  phoneNumberSearch(phoneNumberSearchDto: PhoneNumberSearchDto) {
      return this.phoneNumberRepository.findWithFilters(phoneNumberSearchDto);
  }
}
