import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectionsComponent } from './directions.component';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {FormsModule} from '@angular/forms';



@NgModule({
    declarations: [DirectionsComponent],
  imports: [
    ButtonModule,
    TableModule,
    FormsModule,
    CommonModule
  ],
    exports: [
        DirectionsComponent
    ]
})
export class DirectionsModule { }
