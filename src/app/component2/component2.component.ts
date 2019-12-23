import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../service1.service';
import { Service2Service } from '../service2.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  moviesAfter2005 = [];
  moviesAfterYear = [];
  allMovieList = [];
  year = 2000;
  constructor(mymovies:Service1Service, movieList:Service2Service) { 
    console.log("in cons")
    this.moviesAfter2005 = mymovies.getMovies(2005);
    this.allMovieList = movieList.getMovieList();
  }

  onClickHandler() {
    console.log("in click", this.year)
    this.moviesAfterYear = []
    this.allMovieList.forEach(element => {
      if(element.year >= this.year){
        this.moviesAfterYear.push(element);
      }
    });
  }

  ngOnInit() {
  }

}
