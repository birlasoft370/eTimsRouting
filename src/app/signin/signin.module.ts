import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninRoutingModule } from './signin-routing.module';
import { SigninComponent } from './signin.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    CommonModule,
    SigninRoutingModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class SigninModule { }
