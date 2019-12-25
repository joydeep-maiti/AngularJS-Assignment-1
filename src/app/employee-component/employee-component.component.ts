import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-component',
  templateUrl: './employee-component.component.html',
  styleUrls: ['./employee-component.component.css']
})
export class EmployeeComponentComponent implements OnInit {
  employeeList = [
    {name:"Karan", batch:"BOP", tech:"JAVA"},
    {name:"Pranit", batch:"Batch1", tech:"JAVA"},
    {name:"Shubham", batch:"Batch1", tech:"JAVA"},
    {name:"Prashant", batch:"Batch1", tech:".NET"},
    {name:"Rahul", batch:"Batch1", tech:"JAVA"},
    {name:"Lalit", batch:"BOP", tech:"JAVA"},
    {name:"Ayush", batch:"BOP", tech:"JAVA"},
    {name:"Vishal", batch:"Batch1", tech:"JAVA"}

  ]
  constructor() { }

  ngOnInit() {
  }

}
