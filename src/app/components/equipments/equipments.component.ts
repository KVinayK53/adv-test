import { Component, OnInit } from '@angular/core';
import {IDirection} from '../../models/directions.model';
import {IEquipment} from '../../models/equipment.model';

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.scss']
})
export class EquipmentsComponent implements OnInit {

  equipments: IEquipment[] = [];

  constructor() {

  }

  ngOnInit() {
    this.addNewEquipment();
  }

  addNewEquipment() {
    this.equipments.push(new IEquipment(0, '', '', 0));
  }

  removeItem(index) {
    this.equipments.splice(index, 1);
  }

}
