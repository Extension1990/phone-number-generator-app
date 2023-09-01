import { Test, TestingModule } from '@nestjs/testing';
import { PhoneNumbersController } from './phone-numbers.controller';
import { PhoneNumbersService } from './phone-numbers.service';

describe('PhoneNumbersController', () => {
  let phoneNumbersController: PhoneNumbersController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PhoneNumbersController],
      providers: [PhoneNumbersService],
    }).compile();

    phoneNumbersController = app.get<PhoneNumbersController>(PhoneNumbersController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(phoneNumbersController.getHello()).toBe('Hello World!');
    });
  });
});
