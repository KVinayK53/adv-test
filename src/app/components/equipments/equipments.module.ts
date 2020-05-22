import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentsComponent } from './equipments.component';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {FormsModule} from '@angular/forms';



@NgModule({
    declarations: [EquipmentsComponent],
  imports: [
    ButtonModule,
    TableModule,
    FormsModule,
    CommonModule
  ],
    exports: [
        EquipmentsComponent
    ]
})
export class EquipmentsModule { }
