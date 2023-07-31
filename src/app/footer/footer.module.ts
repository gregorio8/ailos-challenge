import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { SharedModule } from '../shared/shared.module';
import { ButtonModule } from '../components/button/button.module';

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ButtonModule 
  ],
  exports: [
    FooterComponent
  ],
})
export class FooterModule { }
