import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpParams } from "@angular/common/http";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

import { Util } from "../Util";

import { Restaurant } from "./restaurant/restaurant.model";
import { MenuItem } from "./../restaurant-detail/menu-item/menu-item.model";

@Injectable()
export class RestaurantsService {
  constructor(private http: HttpClient) {}

  getRestaurants(search?: string): Observable<Restaurant[]> {
    let params: HttpParams;
    if (search) {
      params = new HttpParams().append( 'q', search );
    }
    return this.http.get<Restaurant[]>(`${Util.url}/restaurants`, { params: params });
  }

  getRestaurantsById(id: string): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${Util.url}/restaurants/${id}`);
  }

  getReviewsOfRestaurants(id: string): Observable<any> {
    return this.http.get(`${Util.url}/restaurants/${id}/reviews`);
  }

  getMenuOfRestaurant(id: string): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(`${Util.url}/restaurants/${id}/menu`);
  }
}
