import { Component, OnInit } from '@angular/core';
import {IDirection} from '../../models/directions.model';

@Component({
  selector: 'app-directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.scss']
})
export class DirectionsComponent implements OnInit {

  directions: IDirection[] = [];

  constructor() {

  }

  ngOnInit() {
    this.addNewDirection();
  }

  addNewDirection() {
    this.directions.push(new IDirection('', '', 0, ''));
  }

  removeItem(index) {
    this.directions.splice(index, 1);
  }

}
