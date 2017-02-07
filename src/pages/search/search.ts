import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { CategoryPage } from '../category/category';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  public highlights: any = [
    {title: 'Semana do Food Park', logo: null, img: 'http://www.portaldarmc.com.br/wp-content/uploads/2016/03/food-truck-park-Americana.jpg'},
    {title: 'Love Japan', logo: 'https://instagram.ffor2-1.fna.fbcdn.net/t51.2885-19/s150x150/14659416_862560453880389_7502452811137810432_a.jpg', img: 'http://1.bp.blogspot.com/-CeqpZXvnXfg/T7KGh_r39cI/AAAAAAAAABc/E8oQ9OW5kq0/s1600/hiro-sushi-490x235.png'},
    {title: 'Semana do Food Park', logo: null, img: 'http://www.portaldarmc.com.br/wp-content/uploads/2016/03/food-truck-park-Americana.jpg'},
    {title: 'Love Japan', logo: 'https://instagram.ffor2-1.fna.fbcdn.net/t51.2885-19/s150x150/14659416_862560453880389_7502452811137810432_a.jpg', img: 'http://1.bp.blogspot.com/-CeqpZXvnXfg/T7KGh_r39cI/AAAAAAAAABc/E8oQ9OW5kq0/s1600/hiro-sushi-490x235.png'},
    {title: 'Semana do Food Park', logo: null, img: 'http://www.portaldarmc.com.br/wp-content/uploads/2016/03/food-truck-park-Americana.jpg'},
    {title: 'Love Japan', logo: 'https://instagram.ffor2-1.fna.fbcdn.net/t51.2885-19/s150x150/14659416_862560453880389_7502452811137810432_a.jpg', img: 'http://1.bp.blogspot.com/-CeqpZXvnXfg/T7KGh_r39cI/AAAAAAAAABc/E8oQ9OW5kq0/s1600/hiro-sushi-490x235.png'},
  ];

  public widthHighlights = '';
  public marginHighlights = '10px';

  public categories: any = [
    {name: 'Cafés'},
    {name: 'Carnes'},
    {name: 'Creperia'},
    {name: 'Doces & Sobremesas'},
    {name: 'Fitness'},
    {name: 'Frutos do Mar'},
    {name: 'Regional'},
    {name: 'Sushi'},
    {name: 'Temakeria'}
  ];

  constructor(public navCtrl: NavController) {
    this.widthHighlights = this.highlights.length * 310 + 'px';
  }

  categorySelected(category) {
    this.navCtrl.push(CategoryPage);
  }

}
