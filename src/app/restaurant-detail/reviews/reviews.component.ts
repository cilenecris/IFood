import { ActivatedRoute } from "@angular/router";
import { RestaurantsService } from "./../../restaurants/restaurants.service";
import { Observable } from "rxjs/Observable";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "if-reviews",
  templateUrl: "./reviews.component.html"
})
export class ReviewsComponent implements OnInit {
  reviews: Observable<any>;

  constructor(
    private restauranteService: RestaurantsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.reviews = this.restauranteService.getReviewsOfRestaurants(
      this.route.parent.snapshot.params["id"]
    );
  }
}
