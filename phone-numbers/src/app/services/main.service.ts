import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  countriesUrl = 'https://restcountries.com/v3.1/all';
  numbersUrl = 'https://randommer.io/api/Phone/Generate';
  serverUrl = 'http://localhost:9000/api/phone-numbers/';

  constructor(private http: HttpClient) { }

  getAllCountries() {
    return this.http.get(this.countriesUrl);
  }

  generatePhoneNumbers(countryCode: string, quantity: number) {
    const key = '2dcf5cc7939946bfb948c51aaa2d377b';
    const header = new HttpHeaders({'x-api-key': key});
    return this.http.get(this.numbersUrl + `?CountryCode=${countryCode}&Quantity=${quantity}`, {headers: header});
  }

  storePhoneNumbers(phoneNumbers: any) {
    return this.http.post(this.serverUrl, phoneNumbers);
  }

  getPhoneNumbers() {
    return this.http.get(this.serverUrl);
  }
}
