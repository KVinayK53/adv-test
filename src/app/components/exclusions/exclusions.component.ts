import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IEquipment} from '../../models/equipment.model';
import {Exclusion, IExclusion} from '../../models/exclusions.model';

@Component({
  selector: 'app-exclusions',
  templateUrl: './exclusions.component.html',
  styleUrls: ['./exclusions.component.scss']
})
export class ExclusionsComponent implements OnInit {

  @Input() exclusions: IExclusion[] = [];
  @Output() exclusionsChange = new EventEmitter();

  constructor() {

  }

  ngOnInit() {
  }

  addNewExclusion() {
    this.exclusions.push(new Exclusion());
  }

  removeItem(index) {
    this.exclusions.splice(index, 1);
  }
}
