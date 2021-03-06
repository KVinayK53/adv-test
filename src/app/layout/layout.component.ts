import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ActionService} from '../service/action.service';
import * as _ from 'lodash';
import {ActionAttributeData, IActionAttributeData} from "../models/action-attribute-data.model";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  actionId: number;
  curentActionData: any;
  totalData: any;
  items: string[] = [];
  selectedTab: any;
  totalActionData: IActionAttributeData;

  constructor(
    private route: ActivatedRoute,
    private actionSer: ActionService,
    private router: Router
  ) {
    this.route.paramMap.subscribe(params => {
      if (params.get('id')) {
        this.actionId = parseInt(params.get('id'), 10);
      }
      this.totalData = this.actionSer.actionData;
      if (this.totalData) {
        this.items = _.map(this.totalData, (item) => {
          item.label = item.name;
          item.routerLink = ['/action/' + item.id];
          return item;
        });
        _.reverse(this.items);
      } else {
         this.router.navigate(['/']).then();
      }
      console.log('id is: ' + this.actionId);
      this.fetchData(this.actionId);
    });
  }

  ngOnInit() {

  }

  private fetchData(actionId: number) {
    this.curentActionData = this.actionSer.getActionData(actionId);
    if (this.curentActionData) {
      this.selectedTab = this.curentActionData.attr[0];
    }
    this.totalActionData = new ActionAttributeData();
  }

  isSelected(item) {
    return (this.selectedTab.id === item.id) ? true : false;
  }

  saveData() {
    console.log(JSON.stringify(this.totalActionData));
  }

}
