import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IDirection} from '../../models/directions.model';
import {Equipment, IEquipment} from '../../models/equipment.model';

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.scss']
})
export class EquipmentsComponent implements OnInit {

  @Input() equipments: IEquipment[] = [];
  @Output() equipmentsChange = new EventEmitter();

  constructor() {

  }

  ngOnInit() {
  }

  addNewEquipment() {
    this.equipments.push(new Equipment(0, '', '', 0));
  }

  removeItem(index) {
    this.equipments.splice(index, 1);
  }

}
