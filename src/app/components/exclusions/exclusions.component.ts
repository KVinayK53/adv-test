import { Component, OnInit } from '@angular/core';
import {IEquipment} from '../../models/equipment.model';
import {IExclusion} from '../../models/exclusions.model';

@Component({
  selector: 'app-exclusions',
  templateUrl: './exclusions.component.html',
  styleUrls: ['./exclusions.component.scss']
})
export class ExclusionsComponent implements OnInit {

  exclusions: IExclusion[] = [];

  constructor() {

  }

  ngOnInit() {
    this.addNewExclusion();
  }

  addNewExclusion() {
    this.exclusions.push(new IExclusion('', 0, 0, 0));
  }

  removeItem(index) {
    this.exclusions.splice(index, 1);
  }
}
