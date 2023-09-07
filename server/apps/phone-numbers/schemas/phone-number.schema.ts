/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PhoneNumberDocument = PhoneNumber & Document;

@Schema()
export class PhoneNumber {
    @Prop([String])
    phoneNumbers: string[];
}

export const PhoneNumberSchema = SchemaFactory.createForClass(PhoneNumber);
