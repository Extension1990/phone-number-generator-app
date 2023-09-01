import { NestFactory } from '@nestjs/core';
import { PhoneNumbersModule } from './phone-numbers.module';

async function bootstrap() {
  const app = await NestFactory.create(PhoneNumbersModule);
  await app.listen(3000);
}
bootstrap();
