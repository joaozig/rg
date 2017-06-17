import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { API_URL } from '../app/constants';

@Injectable()
export class PlaceService {

  constructor(public http: Http) { }

  getPlaces(): Promise<any> {

    return new Promise((resolve, reject) => {

      var url = API_URL + '/places';
      this.http.get(url).map(res => res.json()).subscribe(response => {
        resolve(response);
      }, (err) => {
        reject(err);
      });
    });
  }
}