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

  constructor(private service: MainService) {

  }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries() {
    this.service.getAllCountries().subscribe((data) => {
      this.countries = data;
      console.log(data)
    })
  }

  onCountryChange(event: any) {
    console.log(event.target.value)
  }

  onInputChange(event: any) {
    console.log(event.target.value)
  }

  generatePhoneNumbers(countryCode: string, quantity: number) {
    this.service.generatePhoneNumbers(countryCode, quantity).subscribe((data: any) => {
      this.generatedPhoneNumbers = data;
    })
  }
}
