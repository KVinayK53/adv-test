import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import {MenuModule} from 'primeng/menu';
import {TabViewModule} from 'primeng/tabview';
import {TableModule} from 'primeng/table';
import {ChargesModule} from '../components/charges/charges.module';
import {DirectionsModule} from '../components/directions/directions.module';
import {EquipmentsModule} from '../components/equipments/equipments.module';
import {ExclusionsModule} from '../components/exclusions/exclusions.module';
import {ExpertiseModule} from '../components/expertise/expertise.module';
import {MatlistModule} from '../components/matlist/matlist.module';
import {MeasurementsModule} from '../components/measurements/measurements.module';
import {PublicationsModule} from '../components/publications/publications.module';



@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    MenuModule,
    TabViewModule,
    TableModule,
    ChargesModule,
    DirectionsModule,
    EquipmentsModule,
    ExclusionsModule,
    ExpertiseModule,
    MatlistModule,
    MeasurementsModule,
    PublicationsModule,
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class LayoutModule { }
