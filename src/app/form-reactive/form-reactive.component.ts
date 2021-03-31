import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {
  
  myReactiveForm: FormGroup;

  genders = [
    {id:1, genderType: 'Male'},
    {id:2, genderType: 'Female'}
  ]
  constructor() { }

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      'userDetail': new FormGroup({
        'username':new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email],),
      }),
      'password': new FormControl(null),
      'gender': new FormControl('Male'),
      'skills': new FormArray([
        new FormControl(null, Validators.required)
      ])
    });
  }

  onSubmit(){
    console.log(this.myReactiveForm.value);
  }

  onAddSkill(){
    (<FormArray>this.myReactiveForm.get('skills')).push(new FormControl(null, Validators.required));
  }

}
