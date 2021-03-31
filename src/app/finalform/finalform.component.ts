import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { EnrolldataService } from '../enrolldata.service';
import { Router} from "@angular/router";
@Component({
  selector: 'app-finalform',
  templateUrl: './finalform.component.html',
  styleUrls: ['./finalform.component.css']
})
export class FinalformComponent implements OnInit {

  myReactiveForm: FormGroup;


  constructor(private _enrollService: EnrolldataService, private route:Router) { }

  ngOnInit(): void {
  this.myReactiveForm = new FormGroup({
        'username':new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email],),
        'password': new FormControl(null),
  })

}
onSubmit(){
  // console.log(this.myReactiveForm.value);
  this._enrollService.enroll(this.myReactiveForm.value)
  .subscribe(
    data => console.log("Success",data),
    error => console.log("error",error)
  )
  this.myReactiveForm.reset()
  this.route.navigate(['/formlist']);
}



}
