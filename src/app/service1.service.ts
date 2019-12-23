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

  getMovies() {
    let movieList = [{name:"Baazigar", actor:"Shahrukh", year: 1994}];
    this.movies.forEach(element => {
      if(element.year > 2005){
        movieList.push(element);
      }
    });
    return movieList;
  }
}
