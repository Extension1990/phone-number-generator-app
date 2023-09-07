import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhoneNumbersGeneratorComponent } from './phone-numbers-generator/phone-numbers-generator.component';

const routes: Routes = [
  {
    path: '',
    component: PhoneNumbersGeneratorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
