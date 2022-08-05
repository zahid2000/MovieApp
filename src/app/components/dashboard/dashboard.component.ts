import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/classes/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  movies:Movie[]=[]
  movieLength:number
  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
    this.getMovies()
  }
getMovies():void{
  this.movieService.getMovies().subscribe((response)=>{
    this.movies=response.slice(0,5),
    this.movieLength=response.length
  })
}
}
