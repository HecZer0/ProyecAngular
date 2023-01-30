import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ContactReactiveComponent } from './contact-reactive.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactReactiveRoutingModule } from './contact-reactive-routing.module';


@NgModule({
  declarations: [ContactReactiveComponent],
  imports: [
    CommonModule,
    ContactReactiveRoutingModule,
    ReactiveFormsModule
  ]
})
export class ContactReactiveModule { }
