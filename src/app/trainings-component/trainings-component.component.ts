import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainings-component',
  templateUrl: './trainings-component.component.html',
  styleUrls: ['./trainings-component.component.css']
})
export class TrainingsComponentComponent implements OnInit {
  trainingList = [
    {tech:"JAVA", weeks:7},
    {tech:"Angular", weeks:5},
    {tech:"React.Js", weeks:5},
    {tech:"Node.Js", weeks:6},
    {tech:"Python", weeks:4},
    {tech:"Salesforce Admin", weeks:3},
    {tech:"AI & ML", weeks:12}
  ]
  constructor() { }

  ngOnInit() {
  }

}
