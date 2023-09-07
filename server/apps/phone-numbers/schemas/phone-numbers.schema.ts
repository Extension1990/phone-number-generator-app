/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
// import { PhoneNumber } from './phone-number.schema';

export type PhoneNumbersDocument = PhoneNumbers & Document;

@Schema()
export class PhoneNumbers {
    @Prop([String])
    phoneNumbers: string[];
}

export const PhoneNumbersSchema = SchemaFactory.createForClass(PhoneNumbers);
