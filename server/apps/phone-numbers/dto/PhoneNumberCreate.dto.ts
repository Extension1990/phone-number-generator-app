/* eslint-disable prettier/prettier */
import { IsNotEmpty } from "class-validator";

export class PhoneNumberCreateDto {
    id: string;
    @IsNotEmpty()
    phoneNumber: string;
    @IsNotEmpty()
    countryCode: string;
    type: string;
    length: string;
    isValid: boolean;
}