import { Component, OnInit } from '@angular/core';
import { TestDetailsService } from '../test-details.service';

@Component({
  selector: 'app-formdata',
  templateUrl: './formdata.component.html',
  styleUrls: ['./formdata.component.css']
})
export class FormdataComponent implements OnInit {

  constructor(private _formService: TestDetailsService) { }

  
  formDisplay:any=[]

  submitted = false;

  ngOnInit(): void {
  this.formDisplay =  this._formService.getFormDetails();
  console.log(this.formDisplay,"llll");
  }

  
}
