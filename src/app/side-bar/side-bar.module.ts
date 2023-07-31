import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar.component';

@NgModule({
  declarations: [
    SideBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SideBarComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SideBarModule { }
