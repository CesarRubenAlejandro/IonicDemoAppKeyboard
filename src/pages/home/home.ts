import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormPage } from '../form/form';
import { SearchPage } from '../search/search';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  toSearch() {
    this.navCtrl.push(SearchPage);
  }

  toForm() {
    this.navCtrl.push(FormPage);
  }
}
