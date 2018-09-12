import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Http } from "@angular/http";
import { ErrorHandler } from "../app.error-handler";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

import { Util } from "../Util";

import { Restaurant } from "./restaurant/restaurant.model";
import { MenuItem } from "./../restaurant-detail/menu-item/menu-item.model";

@Injectable()
export class RestaurantsService {
  constructor(private http: Http) {}

  getRestaurants(search?: string): Observable<Restaurant[]> {
    return this.http.get(`${Util.url}/restaurants`, {params: {q: search}})
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }

  getRestaurantsById(id: string): Observable<Restaurant> {
    return this.http
      .get(`${Util.url}/restaurants/${id}`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
  }

  getReviewsOfRestaurants(id: string): Observable<any> {
    return this.http
      .get(`${Util.url}/restaurants/${id}/reviews`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
  }

  getMenuOfRestaurant(id: string): Observable<MenuItem[]> {
    return this.http
      .get(`${Util.url}/restaurants/${id}/menu`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
  }
}
