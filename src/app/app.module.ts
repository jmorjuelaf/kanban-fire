 import { BrowserModule } from '@angular/platform-browser';
 import { NgModule } from '@angular/core';
 
 import { AppComponent } from './app.component';
 import { MatToolbarModule } from '@angular/material/toolbar';
 import { MatIconModule } from '@angular/material/icon';
import { TaskComponent } from './task/task.component';
import { MatCardModule } from '@angular/material/card';
 
 @NgModule({
   declarations: [AppComponent, TaskComponent],
   imports: [
    BrowserModule, 
    MatToolbarModule, 
    MatIconModule,
    MatCardModule
  ],
   providers: [],
   bootstrap: [AppComponent],
 })
 export class AppModule {}