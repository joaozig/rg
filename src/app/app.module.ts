import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { OrderByPipe } from '../pipes/order-by';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { PlacesPage } from '../pages/places/places';
import { CollectionsPage } from '../pages/collections/collections';

import { LocalPage } from '../pages/local/local';

@NgModule({
  declarations: [
    MyApp,
    OrderByPipe,
    TabsPage,
    HomePage,
    PlacesPage,
    CollectionsPage,
    LocalPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    PlacesPage,
    CollectionsPage,
    LocalPage,
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
