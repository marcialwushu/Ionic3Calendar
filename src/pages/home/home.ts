import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  eventSource = [];
  viewTitle: string;
  selectDay = new Date();

  calendar = {
    mode: 'month',
    currentDate: this.selectDay
  }

  constructor(public navCtrl: NavController) {

  }
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  onTimeSelected(ev) {

  }

  onEventSelected(event) {

  }


}
