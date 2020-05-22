import {Injectable, OnInit} from '@angular/core';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  actionData: any;

  constructor() {
    this.getData();
  }

  getData() {
    const data = localStorage.getItem('actionData');
    this.actionData = (data ? JSON.parse(data) : null);
  }

  updateActionAttributes(data) {
    localStorage.setItem('actionData', JSON.stringify(data));
    this.getData();
  }

  getActionData(id) {
    if (this.actionData) {
      return _.find(this.actionData, ['id', id]);
    } else {
      return null;
    }
  }

}
