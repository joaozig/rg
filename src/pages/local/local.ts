import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-local',
  templateUrl: 'local.html'
})
export class LocalPage {

  public hiddenOpeningHours: boolean = true;
  public restaurants: any = [
    {name: 'Batatop Recife', slogan: 'A Batata do Brasil', img: 'https://instagram.ffor2-1.fna.fbcdn.net/t51.2885-19/s150x150/12918006_1583681671946272_1019593554_a.jpg'},
    {name: 'Moov Food', slogan: 'Sanduíches Especiais', img: 'https://instagram.ffor2-1.fna.fbcdn.net/t51.2885-19/s150x150/14701210_136048023536340_6748206886958399488_a.jpg'},
    {name: 'Parada Obrigatória Food Truck', slogan: 'Hambúrguer', img: 'https://instagram.ffor2-1.fna.fbcdn.net/t51.2885-19/s150x150/12750056_952682101492810_852785060_a.jpg'},
    {name: 'O Irlandês', slogan: 'Container Pub', img: 'https://instagram.ffor2-1.fna.fbcdn.net/t51.2885-19/s150x150/14719290_1279767832065659_3547070145232896000_a.jpg'},
    {name: 'Camaria', slogan: 'Cozinha especializada em Camarão', img: 'https://instagram.ffor2-1.fna.fbcdn.net/t51.2885-19/s150x150/12599001_1683055101966099_1816015957_a.jpg'},
    {name: 'Empabike', slogan: 'Empadas Maravilhosas', img: 'https://instagram.ffor2-1.fna.fbcdn.net/t51.2885-19/s150x150/14723478_1860763770876868_304617853934370816_a.jpg'},
    {name: 'Docecleta', slogan: 'Brownieria Ambulante', img: 'https://instagram.ffor2-1.fna.fbcdn.net/t51.2885-19/s150x150/15876245_635742426623305_8260156776695988224_n.jpg'},
    {name: 'Las Churreras', slogan: 'Churros Gourmet', img: 'https://instagram.ffor2-1.fna.fbcdn.net/t51.2885-19/11381852_1138394712843529_1451259289_a.jpg'},
    {name: 'Hasta La Pizza', slogan: 'Pizzas Artesanais', img: 'https://instagram.ffor2-1.fna.fbcdn.net/t51.2885-19/s150x150/11352407_1679687215602014_256126701_a.jpg'},
    {name: 'RocKebab', slogan: 'Comida Árabe', img: 'https://instagram.ffor2-1.fna.fbcdn.net/t51.2885-19/s150x150/11909349_1662683050651721_1030618731_a.jpg'},
    {name: 'Street Fish Temakeria', slogan: 'Temakeria Móvel', img: 'https://instagram.ffor2-1.fna.fbcdn.net/t51.2885-19/11419022_1482379588720971_1049972595_a.jpg'},
    {name: 'Mafalda na Estrada', slogan: 'Pastéis e molhos caseiros', img: 'https://instagram.ffor2-1.fna.fbcdn.net/t51.2885-19/s150x150/12132859_537244823096840_1152348639_a.jpg'},
    {name: 'É o Pipoco Food Truck', slogan: 'Caldinhos e Petiscos', img: 'https://instagram.ffor2-1.fna.fbcdn.net/t51.2885-19/s150x150/14624413_1671340529846105_6013344876035309568_a.jpg'},
    {name: "Vic's Hot Dog", slogan: 'Hot Dogs Gourmet', img: 'https://instagram.ffor2-1.fna.fbcdn.net/t51.2885-19/s150x150/13531992_1798000203770325_2098566642_a.jpg'},
    {name: "Sorveteria Bacana", slogan: 'Sorvetes', img: 'https://instagram.ffor2-1.fna.fbcdn.net/t51.2885-19/11084783_836770263077924_567533778_a.jpg'},
    {name: "Cachaçaria Sindicato", slogan: 'Cachaças e Drinks', img: 'https://instagram.ffor2-1.fna.fbcdn.net/t51.2885-19/s150x150/14278982_1097108760384532_225118058_a.jpg'},
  ];

  constructor(private navCtrl: NavController) { }

  toggleOpeningHours() {
    this.hiddenOpeningHours = !this.hiddenOpeningHours; 
  }

  openGallery() {
    // this.navCtrl.push(LocalsGalleryPage);
  }
}