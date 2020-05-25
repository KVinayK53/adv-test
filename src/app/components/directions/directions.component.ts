import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Direction, IDirection} from '../../models/directions.model';

@Component({
  selector: 'app-directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.scss']
})
export class DirectionsComponent implements OnInit {

  @Input() directions: IDirection;
  @Output() directionChange = new EventEmitter();

  directionData = [];

  constructor() {

  }

  ngOnInit() {
    this.directionData.push(this.directions);
  }


}
