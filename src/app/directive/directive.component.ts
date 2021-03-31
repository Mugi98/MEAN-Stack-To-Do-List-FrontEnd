import { Component, OnInit } from '@angular/core';
import { TestDetailsService } from '../test-details.service';
@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  displayArr: any;
  constructor(private testResult: TestDetailsService) { }

  ngOnInit(): void {
    this.testScore = this.testResult.getTestResult();
  }
  
  arr = [1,2,3,4,5];

  public testScore = [];

  display(){
    this.displayArr =this.arr ; 
  }
  viewMode = "";


 
}
