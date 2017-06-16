import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { SearchPage } from '../search/search';
import { CategoryPage } from '../category/category';

import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
  providers: [CategoryService]
})
export class CategoriesPage {

  categories: any = [];

  showLoading = true;
  showReload = false;
  showContent = false;

  constructor(
    private navCtrl: NavController,
    public categoryService: CategoryService) { }

  ngOnInit() {
    this._loadData();
  }

  openSearch() {
    this.navCtrl.push(SearchPage);
  }

  openCategory(category) {
    this.navCtrl.push(CategoryPage, {category: category});
  }

  /**** PRIVATE METHODS ****/
  private _loadData() {

    this.showLoading = true;
    this.showReload = false;
    this.showContent = false;

    this.categoryService.getCategories().then(response => {

      this.showLoading = false;
      this.categories = response;
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