import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExclusionsComponent } from './exclusions.component';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {FormsModule} from '@angular/forms';



@NgModule({
    declarations: [ExclusionsComponent],
  imports: [
    ButtonModule,
    TableModule,
    FormsModule,
    CommonModule
  ],
    exports: [
        ExclusionsComponent
    ]
})
export class ExclusionsModule { }
