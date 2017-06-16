import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-highlight',
  templateUrl: 'highlight.html'
})
export class HighlightPage {

  highlight: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) { }
}
