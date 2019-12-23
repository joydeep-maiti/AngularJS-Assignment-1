import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service2Service {

  constructor() { }

  getMovieList = ()=> {
    return [
      {name:"Baazigar", actor:"Shahrukh", year: 1994},
      {name:"Swadesh", actor:"Shahrukh", year: 2004},
      {name:"My Name is Khan", actor:"Shahrukh", year: 2010},
      {name:"Lagaan", actor:"Aamir", year: 2002},
      {name:"Taare Zameen Par", actor:"Aamir", year: 2006},
      {name:"3 Idiots", actor:"Aamir", year: 2009},
      {name:"Barfi", actor:"Ranbir", year: 2012},
      {name:"Bajirao Mastani", actor:"Ranveer", year: 2015},
      {name:"Sanju", actor:"Ranbir", year: 2018},
      {name:"The Sky is Pink", actor:"Farhaan", year: 2019}
    ]
  }
}
