import { Injectable } from '@angular/core';
import { Movie } from '../models/classes/movie';
import { Movies } from '../models/classes/movie.datasource';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor() {}

  getMovies(): Movie[] {
    return Movies;
  }
}
