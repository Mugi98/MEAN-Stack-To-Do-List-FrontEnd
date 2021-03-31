import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { debounce as _debounce } from 'lodash';

@Component({
  selector: 'app-loaddash',
  templateUrl: './loaddash.component.html',
  styleUrls: ['./loaddash.component.css']
})
export class LoaddashComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  arr1 = [1,2,3,4,5];
  arr2 = [6,7,8,9,0];
  arr3 = (_.concat(this.arr1,this.arr2));
  
  display(){
    console.log(this.arr3);
  }

}
