import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-restaurant',
  templateUrl: 'restaurant.html'
})
export class RestaurantPage {

  restaurant: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
      this.restaurant = navParams.get('restaurant');
    }
}
