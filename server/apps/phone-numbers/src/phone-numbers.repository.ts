/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PhoneNumber, PhoneNumberDocument } from '../schemas/phone-number.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PhoneNumberCreateDto } from '../dto/PhoneNumberCreate.dto';
import { PhoneNumberSearchDto } from '../dto/PhoneNumvberSearch.dto';

@Injectable()
export class PhoneNumberRepository {
    constructor(@InjectModel(PhoneNumber.name) private phoneNumberModel: Model<PhoneNumberDocument>) { }
    
    // Store phone numbers
    async storePhoneNumbers(phoneNumberCreatedto: PhoneNumberCreateDto): Promise<PhoneNumber> {
        const newPhoneNumbers = new this.phoneNumberModel(phoneNumberCreatedto);
        return await newPhoneNumbers.save();
    }
    
    // Get all stored phone numbers
    async getCountryPhoneNumbers(): Promise<PhoneNumber[]> {
        return await this.phoneNumberModel.find();
    }

    // Find phone numbers by country
    async findWithFilters(filter: PhoneNumberSearchDto) {
        const country = Object.is(filter.country, undefined) ? '' : filter.country;
        return await this.phoneNumberModel.find({ $and: [{ country: { $regex: country } }] });

    }
}