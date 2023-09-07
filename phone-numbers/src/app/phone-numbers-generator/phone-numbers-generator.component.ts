import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';
import { PhoneNumberUtil } from 'google-libphonenumber';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-phone-numbers-generator',
  templateUrl: './phone-numbers-generator.component.html',
  styleUrls: ['./phone-numbers-generator.component.scss'],
})
export class PhoneNumbersGeneratorComponent implements OnInit {
  countries: any;
  selectedCountry: any;
  countryCode: string = '';
  quantity: number = 0;
  generatedPhoneNumbers: any;
  number: string = '';
  phoneNumbers: [] = [];
  phoneNumber: any;
  databaseNumbers: any;
  internationalNumber = '+34654694651';
  dialCountry: any;
  phoneType: any;
  phoneUtil: any;
  isValid: boolean = false;

  constructor(private service: MainService) {}

  ngOnInit(): void {
    this.getCountries();
    this.getPhoneNumbers();
  }

  handleNumberChange() {
    const phoneUtil = PhoneNumberUtil.getInstance();
    const parsedInput = phoneUtil.parseAndKeepRawInput(this.phoneNumber);
    if (parsedInput.getNationalNumber() && parsedInput.getCountryCode()) {
      this.dialCountry = parsedInput;
    } else {
      this.dialCountry = null;
    }
  }

  getCountries() {
    this.service.getAllCountries().subscribe((data) => {
      this.countries = data;
    });
  }

  onCountryChange(event: any) {
    console.log(event);
  }

  onInputChange(event: any) {
    console.log(event);
  }

  generatePhoneNumbers(countryCode: string, quantity: number) {
    this.service
      .generatePhoneNumbers(countryCode, quantity)
      .subscribe((data: any) => {
        this.generatedPhoneNumbers = data;
      });
  }

  getPhoneNumbers() {
    this.service.getPhoneNumbers().subscribe((data: any) => {
      this.phoneNumbers = data;
      this.phoneNumbers.forEach((number: any) => {
        this.databaseNumbers = number.phoneNumbers;
        this.databaseNumbers.forEach((phoneNumber: any) => {
          this.phoneNumber = phoneNumber;
          const phoneUtil = PhoneNumberUtil.getInstance();
          this.phoneUtil = phoneUtil;
          // this.phoneType = phoneUtil.getNumberType(this.phoneNumber);
          const parsedInput = phoneUtil.parseAndKeepRawInput(this.phoneNumber);
          if (parsedInput.getNationalNumber() && parsedInput.getCountryCode()) {
            this.dialCountry = parsedInput;
          } else {
            this.dialCountry = null;
          }
        });
      });
    });
  }

  storePhoneNumbers(phoneNumbers: string[]) {
    phoneNumbers = this.generatedPhoneNumbers;
    this.service.storePhoneNumbers(phoneNumbers).subscribe((data: any) => {
      this.ngOnInit();
      Swal.fire({
        icon: 'success',
        title: 'Phone numbers stored successfully to database',
      });
      console.log(data);
    });
  }
}
