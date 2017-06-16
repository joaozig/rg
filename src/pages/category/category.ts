import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})
export class CategoryPage {

  category: any;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams) {
      this.category = navParams.get('category');
    }

  showConsole() {
    event.preventDefault();
    event.stopPropagation();
    console.log('opa');
  }

  cardClicked() {
    console.log('card clicked');
  }
}