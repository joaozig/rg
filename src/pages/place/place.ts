import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { RestaurantPage } from '../restaurant/restaurant';
import { LocalGalleryPage } from '../local-gallery/local-gallery';

@Component({
  selector: 'page-place',
  templateUrl: 'place.html'
})
export class PlacePage {

  place: any;
  mapUrl: string;
  today: any;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams) {
      this.today = new Date().getDay();
      this.place = navParams.get('place');
      this.mapUrl = 'https://maps.googleapis.com/maps/api/staticmap?center=';
      this.mapUrl += encodeURI(this.place.address + ' - ' + this.place.neighborhood.name + ', ' + this.place.neighborhood.city);
      this.mapUrl += '&zoom=15&size=400x130&maptype=roadmap&markers=color:red%7Clabel:%7C';
      this.mapUrl += this.place.latitude + ',' + this.place.longitude;
    }

  openGallery() {
    this.navCtrl.push(LocalGalleryPage);
  }

  openRestaurant(restaurant) {
    this.navCtrl.push(RestaurantPage, {restaurant: restaurant});
  }
}