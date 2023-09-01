import { Module } from '@nestjs/common';
import { PhoneNumbersController } from './phone-numbers.controller';
import { PhoneNumbersService } from './phone-numbers.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_URL } from 'apps/constants/app.properties';
import { PhoneNumber, PhoneNumberSchema } from '../schemas/phone-number.schema';
import { PhoneNumberRepository } from './phone-numbers.repository';

@Module({
  imports: [
    MongooseModule.forRoot(MONGO_URL),
    MongooseModule.forFeature([
      { name: PhoneNumber.name, schema: PhoneNumberSchema },
    ]),
  ],
  controllers: [PhoneNumbersController],
  providers: [PhoneNumbersService, PhoneNumberRepository],
})
export class PhoneNumbersModule {}
