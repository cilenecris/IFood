import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Restaurant } from './restaurant/restaurant.model';
import { Util } from '../Util';

@Injectable()
export class RestaurantsService {

  constructor( private http: Http ) { }


  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get( `${Util.url}/restaurants` )
      .map( response => response.json() )
  }

}
