import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from '../../models/classes/movie';
import { Location } from '@angular/common';
@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  @Input() movie: Movie;

  constructor(
    private movieService: MovieService,
    protected route: ActivatedRoute,
    protected location: Location,
  ) {}

  ngOnInit(): void {
    this.getMovie()
  }

  getMovie(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.movieService.getMovie(id)
    .subscribe((response)=>{
      this.movie=response
    })
  }
  save():void{
    this.movieService.update(this.movie)
    .subscribe(()=>{
this.location.back();
    })
  }
}
