import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { API_URL } from '../app/constants';

@Injectable()
export class CategoryService {

  constructor(public http: Http) { }

  getCategories(): Promise<any> {

    return new Promise((resolve, reject) => {

      var url = API_URL + '/categories';
      this.http.get(url).map(res => res.json()).subscribe(response => {
        resolve(response);
      }, (err) => {
        reject(err);
      });
    });
  }
}