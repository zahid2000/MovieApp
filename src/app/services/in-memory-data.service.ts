import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  createDb(){
    const movies=[
      {id:1,name:'movie 1',description:'gozel film',imageUrl:'film1.jpg'},
      {id:2,name:'movie 2',description:'gozel film',imageUrl:'film2.jpg'},
      {id:3,name:'movie 3',description:'gozel film',imageUrl:'film3.jpg'},
      {id:4,name:'movie 4',description:'gozel film',imageUrl:'film4.jpg'},
      {id:5,name:'movie 5',description:'gozel film',imageUrl:'film5.jpg'},
      {id:5,name:'movie 6',description:'gozel film',imageUrl:'film6.jpg'},
      {id:5,name:'movie 7',description:'gozel film',imageUrl:'film7.jpg'},
      {id:5,name:'movie 8',description:'gozel film',imageUrl:'film8.jpg'},
  ]
  return {movies}
  }
}
