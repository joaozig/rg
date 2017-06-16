import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SearchPage } from '../search/search';
import { HighlightPage } from '../highlight/highlight';
import { PlacePage } from '../place/place';
import { FranchisePage } from '../franchise/franchise';
import { RestaurantPage } from '../restaurant/restaurant';
import { CategoryPage } from '../category/category';

import { HighlightService } from '../../services/highlight.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HighlightService]
})
export class HomePage {

  highlights: any = [];

  showLoading = true;
  showReload = false;
  showContent = false;

  constructor(
    public navCtrl: NavController,
    public highlightService: HighlightService) { }

  ngOnInit() {
    this._loadData();
  }

  openSearch() {
    this.navCtrl.push(SearchPage);
  }

  openHighlight(highlight) {
    switch(highlight.highlight_type) {
      case 'news':
        this.navCtrl.push(HighlightPage, {highlight: highlight});
        break;
      case 'place':
        this.navCtrl.push(PlacePage, {place: highlight.place});
        break;
      case 'franchise':
        this.navCtrl.push(FranchisePage, {franchise: highlight.franchise});
        break;
      case 'restaurant':
        this.navCtrl.push(RestaurantPage, {restaurant: highlight.restaurant});
        break;
      case 'category':
        this.navCtrl.push(CategoryPage, {category: highlight.category});
        break;
      default:
        console.log('default');
    }
  }

  /**** PRIVATE METHODS ****/
  private _loadData() {

    this.showLoading = true;
    this.showReload = false;
    this.showContent = false;

    this.highlightService.getHighlights().then(response => {

      this.showLoading = false;
      this.highlights = response;
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
