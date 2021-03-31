import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router} from "@angular/router";
import { TestDetailsService } from '../test-details.service';

@Component({
  selector: 'app-forms-demo',
  templateUrl: './forms-demo.component.html',
  styleUrls: ['./forms-demo.component.css']
})
export class FormsDemoComponent implements OnInit {
  
  @ViewChild('myForm') myForm: NgForm;
  
  constructor(private route:Router, private _formService: TestDetailsService) { }
  
  userName="";

  formData={
    username: '',
    email: '',
    gender: ''
  }

  // submitted = false;
  
  genders = [
    {id:1, value:"Male"},
    {id:2, value:"Female"}
  ];

  defaultGender = 'Male';


  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.route.navigate(['/formdata']);
    // console.log(this.myForm);
  
    this.formData.username = this.myForm.value.userDetail.username;
    this.formData.email = this.myForm.value.userDetail.email;
    this.formData.gender = this.myForm.value.gender;
    this._formService.setFormDetails(this.myForm.value)

  }

}
