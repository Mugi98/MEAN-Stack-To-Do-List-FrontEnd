import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items: any =[];
  public newTask: any = [];
  
  addToList() {
  console.log("hello");

        
        if(this.newTask == '' || this.items.indexOf(this.newTask)> -1){
          alert("Same");
        }
        else{
          this.items.push(this.newTask);
          this.newTask = '';
        }
  }

  deleteTask(index: any){
    this.items.splice(index,1);
  }
}
