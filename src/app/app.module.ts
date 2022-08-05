import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieComponent } from './components/movie/movie.component';
import { FormsModule } from '@angular/forms';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { LoggingComponent } from './components/logging/logging.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
    MovieDetailComponent,
    LoggingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
