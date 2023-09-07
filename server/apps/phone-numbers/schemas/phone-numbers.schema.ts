/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { PhoneNumber } from './phone-number.schema';

export type PhoneNumbersDocument = PhoneNumbers & Document;

@Schema()
export class PhoneNumbers {
    @Prop({ type: [SchemaTypes.ObjectId], ref: 'Phoneumber'})
    phoneNumbers: PhoneNumber[]
}

export const PhoneNumbersSchema = SchemaFactory.createForClass(PhoneNumbers);
