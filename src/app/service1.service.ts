import { Injectable } from '@angular/core';
import { Service2Service } from './service2.service';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {
  movies = []
  constructor(movie:Service2Service) { 
    this.movies = movie.getMovieList();
  }

  getMovies(year) {
    let movieList = [];
    this.movies.forEach(element => {
      if(element.year >= year){
        movieList.push(element);
      }
    });
    return movieList;
  }
}
