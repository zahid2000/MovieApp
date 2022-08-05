import { Component } from '@angular/core';
import { Movie } from '../../models/classes/movie';
import { Movies } from '../../models/classes/movie.datasource';
@Component({
  selector: 'movies',
  templateUrl: 'movies.component.html',
  styleUrls: ['movies.component.css'],
})
export class MoviesComponent {
  title = 'Movie List';
  movies = Movies;
  selectedMovie: Movie;

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }

}
