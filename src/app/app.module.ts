import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Service1Service } from './service1.service';
import { Service2Service } from './service2.service';
import { Component3Component } from './component3/component3.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { EmployeeComponentComponent } from './employee-component/employee-component.component';
import { TrainingsComponentComponent } from './trainings-component/trainings-component.component';
import { ProjectsComponentComponent } from './projects-component/projects-component.component';
import { MyModule1Module } from './my-module1/my-module1.module';
import { MyModule2Module } from './my-module2/my-module2.module';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    Component3Component,
    NavbarComponent,
    HomeComponentComponent,
    EmployeeComponentComponent,
    TrainingsComponentComponent,
    ProjectsComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'employee', component:EmployeeComponentComponent},
      {path:'trainings', component:TrainingsComponentComponent},
      {path:'projects', component:ProjectsComponentComponent},
      {path:'', component:HomeComponentComponent}
    ]),
    MyModule1Module,
    MyModule2Module
  ],
  providers: [
    Service1Service,
    Service2Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
