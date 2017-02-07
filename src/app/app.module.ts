import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { OrderByPipe } from '../pipes/order-by';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { PlacesPage } from '../pages/places/places';
import { CollectionsPage } from '../pages/collections/collections';
import { CollectionPage } from '../pages/collection/collection';
import { LocalPage } from '../pages/local/local';
import { LocalGalleryPage } from '../pages/local-gallery/local-gallery';
import { LocalSlidePage } from '../pages/local-slide/local-slide';
import { SearchPage } from '../pages/search/search';
import { CategoryPage } from '../pages/category/category';

@NgModule({
  declarations: [
    MyApp,
    OrderByPipe,
    TabsPage,
    HomePage,
    PlacesPage,
    CollectionsPage,
    CollectionPage,
    LocalPage,
    LocalGalleryPage,
    LocalSlidePage,
    SearchPage,
    CategoryPage,
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
    CollectionPage,
    LocalPage,
    LocalGalleryPage,
    LocalSlidePage,
    SearchPage,
    CategoryPage,
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
