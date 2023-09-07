import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneNumbersGeneratorComponent } from './phone-numbers-generator.component';

describe('PhoneNumbersGeneratorComponent', () => {
  let component: PhoneNumbersGeneratorComponent;
  let fixture: ComponentFixture<PhoneNumbersGeneratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhoneNumbersGeneratorComponent]
    });
    fixture = TestBed.createComponent(PhoneNumbersGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
