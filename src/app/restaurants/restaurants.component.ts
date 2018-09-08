import { RestaurantsService } from './restaurants.service';
import { Restaurant } from './restaurant/restaurant.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'if-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[]

  constructor( private restaurantsService: RestaurantsService ) { }

  ngOnInit() {
      this.restaurantsService.getRestaurants()
        .subscribe( restaurants => this.restaurants = restaurants )
    }
}
