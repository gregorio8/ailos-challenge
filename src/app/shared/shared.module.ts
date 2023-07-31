import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '../components/button/button.module';
import { CardModule } from '../components/card/card.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule
  ],
})
export class SharedModule { }
