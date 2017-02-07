import { Component } from '@angular/core';

import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-local-slide',
  templateUrl: 'local-slide.html'
})
export class LocalSlidePage {

  constructor(public viewCtrl: ViewController) { }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}