import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { PlacePage } from '../place/place';
import { SearchPage } from '../search/search';

import { PlaceService } from '../../services/place.service';

@Component({
  selector: 'page-places',
  templateUrl: 'places.html',
  providers: [PlaceService]
})
export class PlacesPage {

  places: any;
  // locals: any = [
  //   {name: "Food Park Nas Ubaias", distancia: 12500, distanciaText: '12.5 Km', lat: -8.032149, long: -34.919608, img: "https://instagram.ffor2-1.fna.fbcdn.net/t51.2885-15/s320x320/e35/15802904_732653276884908_8284400252174204928_n.jpg?ig_cache_key=MTQyNjQwNTc1NDMzMTU2MjIzOA%3D%3D.2"},
  //   {name: "Shopping Recife", distancia: 930, distanciaText: '930 m', lat: -8.119160, long: -34.904772, img: "https://instagram.ffor2-1.fna.fbcdn.net/t51.2885-19/10747724_616573428465512_2054296194_a.jpg"},
  //   {name: "Galeria Joana D'arc", distancia: 5462, distanciaText: '5.4 Km', lat: -8.088753, long: -34.885643, img: "https://instagram.ffor2-1.fna.fbcdn.net/t51.2885-19/11355254_710088772428330_970632833_a.jpg"},
  // ];

  showLoading = true;
  showReload = false;
  showContent = false;

  constructor(
    private navCtrl: NavController,
    public placeService: PlaceService) { }

  ngOnInit() {
    this._loadData();
  }

  reload() {
    this._loadData();
  }

  openPlace(place) {
    this.navCtrl.push(PlacePage, {place: place});
  }

  openSearch() {
    this.navCtrl.push(SearchPage);
  }

  /**** PRIVATE METHODS ****/
  private _loadData() {

    this.showLoading = true;
    this.showReload = false;
    this.showContent = false;

    this.placeService.getPlaces().then(response => {

      this.showLoading = false;
      this.places = response;
      this.showContent = true;
    }, error => {
      console.log(error)
      this._showReloadContent();
    });
  }

  private _showReloadContent() {
    this.showReload = true;
    this.showContent = false;
    this.showLoading = false;
  }
}