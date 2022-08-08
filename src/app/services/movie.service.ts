import { Injectable } from '@angular/core';
import { Movie } from '../models/classes/movie';
import { Movies } from '../models/classes/movie.datasource';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiMoviesUrl = 'api/movies';
  constructor(
    private loggingService: LoggingService,
    private httpClient: HttpClient
  ) {}

  getMovies(): Observable<Movie[]> {
    this.loggingService.add('MovieService : listing movies');
    return this.httpClient.get<Movie[]>(this.apiMoviesUrl);
  }
  getMovie(id: number): Observable<Movie> {
    this.loggingService.add('MovieService: get detail by id=' + id);
    return this.httpClient.get<Movie>(this.apiMoviesUrl+'/'+id);
  }
}
