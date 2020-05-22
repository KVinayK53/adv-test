import {Component, OnInit} from '@angular/core';
import {ICharges} from '../../models/charges.model';

@Component({
  selector: 'app-charges',
  templateUrl: './charges.component.html',
  styleUrls: ['./charges.component.scss']
})
export class ChargesComponent implements OnInit {

  charges: ICharges[] = [];

  constructor() {

  }

  ngOnInit() {
    this.addCharges();
  }

  addCharges() {
    this.charges.push(new ICharges('', 0, 0, 0));
  }

  removeItem(index) {
    this.charges.splice(index, 1);
  }
}
