/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PhoneNumberDocument = PhoneNumber & Document;

@Schema()
export class PhoneNumber {
    @Prop()
    id: string;

    @Prop()
    phoneNumber: string;

    @Prop()
    countryCode: string;

    @Prop()
    country: string;

    @Prop()
    type: string;

    @Prop()
    length: string;

    @Prop()
    isValid: boolean;
}

export const PhoneNumberSchema = SchemaFactory.createForClass(PhoneNumber);
