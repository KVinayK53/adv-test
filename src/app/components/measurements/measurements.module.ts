import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeasurementsComponent } from './measurements.component';



@NgModule({
    declarations: [MeasurementsComponent],
    exports: [
        MeasurementsComponent
    ]
})
export class MeasurementsModule { }
