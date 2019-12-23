import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../service1.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  moviesAfter2005 = []
  constructor(mymovies:Service1Service) { 
    this.moviesAfter2005 = mymovies.getMovies();
  }

  ngOnInit() {
  }

}
