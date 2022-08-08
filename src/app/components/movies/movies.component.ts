import { Component } from '@angular/core';
import { Movie } from '../../models/classes/movie';
import { MovieService } from 'src/app/services/movie.service';
@Component({
  selector: 'movies',
  templateUrl: 'movies.component.html',
  styleUrls: ['movies.component.css'],
})
export class MoviesComponent {
  title = 'Movie List';
  movies: Movie[];
  selectedMovie: Movie;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getMovies();
  }
  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }
  getMovies(): void {
    this.movieService.getMovies().subscribe((response) => {
      this.movies = response;
    });
  }
  add(name:string,imageUrl:string,description:string){
   this.movieService.add({
    name,imageUrl,description
   } as Movie).subscribe((response)=>{
    this.movies.push(response)
   })
  }
}
