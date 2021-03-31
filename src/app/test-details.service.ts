import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestDetailsService {
  items: any = [];

  constructor() { }

  getTestResult(){
    return  [
      {id:1, name: "Yash", score: 20},
      {id:2, name: "Rohit", score: 12},
      {id:3, name: "Tejas", score: 23},
      {id:4, name: "Andrew", score: 23},
    ];
  }

  setFormDetails(items){
    this.items.push(items);
  }
  getFormDetails(){
    return this.items;
  }
}
