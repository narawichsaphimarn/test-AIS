import { Component, OnInit } from "@angular/core";
import { MovieService } from "../service/movie.service";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.css"]
})
export class MovieComponent implements OnInit {
  constructor(private movieService: MovieService) {}
  public dataMovie = {};
  public icon = "../assets/star.svg";

  ngOnInit() {
    this.movieService.getData().subscribe(ddd => {
      this.dataMovie = ddd;
      console.log(this.dataMovie);
    });
  }
}
