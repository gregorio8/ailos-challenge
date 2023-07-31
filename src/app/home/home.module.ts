import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SideBarModule } from '../side-bar/side-bar.module';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { SharedModule } from '../shared/shared.module';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { CardModule } from '../components/card/card.module';
import { ButtonModule } from '../components/button/button.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false},
    },
  ],
  imports: [
    CommonModule,
    RouterModule,
    SideBarModule,
    HeaderModule,
    FooterModule,
    CardModule,
    ButtonModule,
    SharedModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    BrowserModule,
  ],
  exports: [
    HomeComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class HomeModule { }
