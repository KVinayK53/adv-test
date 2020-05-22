import {Component, OnInit} from '@angular/core';
import {LayoutOptions} from './layout-options';
import {ActionService} from './service/action.service';
import * as _ from 'lodash';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  actions = LayoutOptions.actions;
  attributes = LayoutOptions.attributes;
  selectedAttributes: string[] = [];
  selectedAction: any;
  storedAttributesData: any;

  constructor(
    private actionSer: ActionService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.storedAttributesData = this.actionSer.actionData || [];
  }

  addAttributes() {
    const setData = this.selectedAction;
    setData.attr = this.selectedAttributes;
    const checkDataExist = _.findIndex(this.storedAttributesData, {id: this.selectedAction.id});
    if (checkDataExist === -1) {
      this.storedAttributesData.push(setData);
      this.actionSer.updateActionAttributes(this.storedAttributesData);
      this.router.navigate(['action', this.selectedAction.id]).then();
    } else {
      this.storedAttributesData.splice(checkDataExist, 1, setData);
      this.actionSer.updateActionAttributes(this.storedAttributesData);
      this.router.navigateByUrl('action/', { skipLocationChange: true }).then(() => {
        this.router.navigate([`action/${this.selectedAction.id}`]);
      });
    }
  }

  getAttributes(ev: any) {
    if (ev.value.id) {
      const findData = _.find(this.storedAttributesData, ['id', ev.value.id]);
      if (findData) {
        this.selectedAttributes = findData.attr;
        this.router.navigate(['action', this.selectedAction.id]).then();
      } else {
        this.selectedAttributes = [];
      }
    }
  }

}
