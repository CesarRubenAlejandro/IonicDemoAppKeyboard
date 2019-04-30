import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, TextInput } from 'ionic-angular';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  activateFocus: boolean = true;
  @ViewChild('searchInput') searchInput: TextInput;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  ngAfterViewChecked() {
      //focus the search input field
      this.searchInput.setFocus();
  }

}
