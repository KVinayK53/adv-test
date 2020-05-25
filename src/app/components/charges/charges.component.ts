import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Charges, ICharges} from '../../models/charges.model';

@Component({
  selector: 'app-charges',
  templateUrl: './charges.component.html',
  styleUrls: ['./charges.component.scss']
})
export class ChargesComponent implements OnInit {

  @Input() charges: ICharges[] = [];
  @Output() chargesChange = new EventEmitter();

  constructor() {

  }

  ngOnInit() {

  }

  addCharges() {
    this.charges.push(new Charges());
  }

  removeItem(index) {
    this.charges.splice(index, 1);
  }

}
