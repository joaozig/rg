import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';

import { LocalSlidePage } from '../local-slide/local-slide';

@Component({
  selector: 'page-local-gallery',
  templateUrl: 'local-gallery.html'
})
export class LocalGalleryPage {

  constructor(private navCtrl: NavController, 
              private modalCtrl: ModalController) { }

  openSlide() {
    let modal = this.modalCtrl.create(LocalSlidePage);
    modal.present();
  }

}