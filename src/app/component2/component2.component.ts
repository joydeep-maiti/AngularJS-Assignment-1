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
  moviesAfterYear = []
  year = 2000;
  constructor(mymovies:Service1Service) { 
    this.moviesAfter2005 = mymovies.getMovies(2005);
    this.moviesAfterYear = mymovies.getMovies(this.year);
  }

  onClickHandler(movieList:Service1Service) {
    console.log("in click")
    this.moviesAfterYear = movieList.getMovies(this.year);
  }

  ngOnInit() {
  }

}
