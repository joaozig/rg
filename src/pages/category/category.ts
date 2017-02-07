import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})
export class CategoryPage {

  constructor(private navCtrl: NavController) { }

  showConsole() {
    event.preventDefault();
    event.stopPropagation();
    console.log('opa');
  }

  cardClicked() {
    console.log('card clicked');
  }
}