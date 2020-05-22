import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatlistComponent } from './matlist.component';



@NgModule({
    declarations: [MatlistComponent],
    exports: [
        MatlistComponent
    ]
})
export class MatlistModule { }
