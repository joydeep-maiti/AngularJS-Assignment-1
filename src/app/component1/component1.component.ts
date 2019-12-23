import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  myObject = [
    {name:"Shahrukh", city:"Bangalore"},
    {name:"Aamir", city:"Mumbai"},
    {name:"Salman", city:"Bangalore"},
    {name:"Ranbir", city:"Kolkata"},
    {name:"Ranveer", city:"Bangalore"},
  ]

  filteredObjectArray =  [];
  
  constructor() { 
    this.myObject.forEach(element => {
      if(element.city == "Bangalore")
      this.filteredObjectArray.push(element);
    });
  }
  ngOnInit() {
    
  }

}
