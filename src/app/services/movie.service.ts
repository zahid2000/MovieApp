import { Injectable } from '@angular/core';
import { Movie } from '../models/classes/movie';
import { Movies } from '../models/classes/movie.datasource';
import { Observable,of } from 'rxjs';
import { LoggingService } from './logging.service';
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private loggingService:LoggingService) {}

  getMovies():Observable<Movie[]> {
    this.loggingService.add('MovieService : listing movies')
    return of(Movies);
  }
}
