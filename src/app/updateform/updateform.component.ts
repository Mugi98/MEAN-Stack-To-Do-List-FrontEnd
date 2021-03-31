import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EnrolldataService } from '../enrolldata.service';
import { ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.css']
})
export class UpdateformComponent implements OnInit {
  id: any ;
  myUpdateForm: FormGroup;
  getData:any=[];
  dataToBeUpdated: any = [];
  constructor(private _enrollService: EnrolldataService, private route:Router,private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      if (typeof params['id'] !== 'undefined') {
          this.id = params['id'];
      } else {
          this.id = '';
      }
    })
   }

  ngOnInit(): void {
    
    this.myUpdateForm = new FormGroup({
        'username':new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email],),
        'password': new FormControl(null, Validators.required),
  })
  this.getDatabyid(this.id)
  }

  onSubmit(){
    console.log(this.myUpdateForm.value);
    var body={
      username:this.myUpdateForm.value.username,
      email:this.myUpdateForm.value.email,
      password: this.myUpdateForm.value.password,
      id:this.id 
    }
    this._enrollService.postupdatedData(body)
    .subscribe(
      data => console.log("Success",data),
      error => console.log("error",error)
    )
    console.log(this.myUpdateForm.value);
    this.myUpdateForm.reset()
    this.route.navigate(['/formlist']);
  }


  getDatabyid(id:any){
    console.log(id);
    
    this._enrollService.updateData(id)
    .subscribe(data=>{
      this.getData=data;
      console.log("getData",this.getData);
     
      //   this.myUpdateForm.setValue({
      //   'userDetail': new FormGroup({
      //   'username':this.getData.newData[0].username,
      //   'email': this.getData.newData[0].email,
      //   'password':this.getData.newData[0].password,
      //   })
      // })
    
      
      // console.log("getData",this.getData.newData[0])
    }
    )
  }
}
