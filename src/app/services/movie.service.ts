import { Injectable } from '@angular/core';
import { Movie } from '../models/classes/movie';
import { Movies } from '../models/classes/movie.datasource';
import { Observable,of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor() {}

  getMovies():Observable<Movie[]> {
    return of(Movies);
  }
}
