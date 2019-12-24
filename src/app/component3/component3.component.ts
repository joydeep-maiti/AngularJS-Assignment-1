import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {
  message = "Please Click a Menu Item";
  selectedMenu = "";
  isHomeActive = false;
  isProjectActive = false;
  isServiceActive = false;
  isContactActive = false;
  todoitem = "";
  todoList = [];
  ename = "";
  feedback = {}

  constructor() { }

  onClickHandler(menu) {
    switch(menu){
      case "home": this.isHomeActive =true;
                    this.isProjectActive = false;
                    this.isServiceActive = false;
                    this.isContactActive = false;
                    this.message = "You Chose ";
                    this.selectedMenu = "HOME"
                    break;
      case "project": this.isProjectActive =true;
                      this.isHomeActive =false;
                      this.isServiceActive = false;
                      this.isContactActive = false;
                    this.message = "You Chose ";
                    this.selectedMenu = "PROJECTS"
                    break;
      case "service": this.isServiceActive =true;
                  this.isHomeActive =false;
                  this.isProjectActive = false;
                  this.isContactActive = false;
                    this.message = "You Chose ";
                    this.selectedMenu = "SERVICES"
                    break;
      case "contact": this.isContactActive =true;
                      this.isHomeActive =false;
                      this.isProjectActive = false;
                      this.isServiceActive = false;
                    this.message = "You Chose ";
                    this.selectedMenu = "CONTACT"
                    break;
    }
  }

  onAddHandler() {
    console.log("in add")
    this.todoList.push(this.todoitem);
  }

  submit(f){
    console.log(f);
    this.feedback = f.value
  }

  ngOnInit() {
  }

}
