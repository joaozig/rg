import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-franchise',
  templateUrl: 'franchise.html'
})
export class FranchisePage {

  franchise: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
      this.franchise = navParams.get('franchise');
    }
}
