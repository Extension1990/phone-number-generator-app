import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-phone-numbers-generator',
  templateUrl: './phone-numbers-generator.component.html',
  styleUrls: ['./phone-numbers-generator.component.scss']
})
export class PhoneNumbersGeneratorComponent implements OnInit {

  countries: any;
  selectedCountry: any;
  countryCode: string = '';
  quantity: number = 0;
  generatedPhoneNumbers: any;
  number: string = '';
  phoneNumbers: [] = [];
  databaseNumbers: any;

  constructor(private service: MainService) {

  }

  ngOnInit(): void {
    this.getCountries();
    this.getPhoneNumbers();
  }

  getCountries() {
    this.service.getAllCountries().subscribe((data) => {
      this.countries = data;
    });
  }

  onCountryChange(event: any) {
  }

  onInputChange(event: any) {
  }

  generatePhoneNumbers(countryCode: string, quantity: number) {
    this.service.generatePhoneNumbers(countryCode, quantity).subscribe((data: any) => {
      this.generatedPhoneNumbers = data;
    });
  }

  getPhoneNumbers() {
    this.service.getPhoneNumbers().subscribe((data: any) => {
      this.phoneNumbers = data;
      this.phoneNumbers.forEach((number: any) => {
        this.databaseNumbers = number.phoneNumbers;
      })
    });
  }

  storePhoneNumbers(phoneNumbers: string[]) {
    phoneNumbers = this.generatedPhoneNumbers;
    this.service.storePhoneNumbers(phoneNumbers).subscribe((data: any) => {
    });
  }
}
