import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class HeaderModule { }
