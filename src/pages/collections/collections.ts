import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { CollectionPage } from '../collection/collection';

@Component({
  selector: 'page-collections',
  templateUrl: 'collections.html'
})
export class CollectionsPage {

  collections = [
    {name: "Para visitar", collections: [1, 2, 3], img: "https://instagram.frec5-1.fna.fbcdn.net/t51.2885-19/s150x150/15251678_1816826701899029_2229997361394876416_a.jpg"},
    {name: "Sushis", collections: [1, 2, 3, 4, 5, 6], img: "https://instagram.frec5-1.fna.fbcdn.net/t51.2885-19/s150x150/12724968_1083958931647692_555246287_a.jpg"},
    {name: "Almoços", collections: [1], img: "https://instagram.frec5-1.fna.fbcdn.net/t51.2885-19/s150x150/15043657_254262328321648_5018320542621499392_a.jpg"},
    {name: "Jantar romântico", collections: [1, 2], img: "https://instagram.frec5-1.fna.fbcdn.net/t51.2885-19/11143066_1459804330976859_1344720989_a.jpg"},
  ];

  constructor(private navCtrl: NavController) { }

  openCollection(collection) {
    this.navCtrl.push(CollectionPage);
  }
}