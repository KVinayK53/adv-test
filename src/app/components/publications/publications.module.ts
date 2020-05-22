import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicationsComponent } from './publications.component';



@NgModule({
    declarations: [PublicationsComponent],
    exports: [
        PublicationsComponent
    ]
})
export class PublicationsModule { }
