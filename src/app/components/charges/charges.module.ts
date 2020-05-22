import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChargesComponent } from './charges.component';
import {TableModule} from 'primeng/table';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';



@NgModule({
  declarations: [ChargesComponent],
  imports: [
    TableModule,
    FormsModule,
    CommonModule,
    ButtonModule
  ],
  exports: [
    ChargesComponent,
  ]
})
export class ChargesModule { }
