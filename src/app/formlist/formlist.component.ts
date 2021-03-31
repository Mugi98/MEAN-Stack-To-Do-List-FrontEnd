import { Component, OnInit } from '@angular/core';
import { EnrolldataService } from '../enrolldata.service';
import { Router} from "@angular/router";
@Component({
  selector: 'app-formlist',
  templateUrl: './formlist.component.html',
  styleUrls: ['./formlist.component.css']
})
export class FormlistComponent implements OnInit {
  // response: any=[];

  constructor(private _enrollService: EnrolldataService,  private route:Router) {
   }

  listData: any = [];

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData=() =>{
    this._enrollService.getData()
    .subscribe(data =>{this.listData = data;// this.response=this.listData.newData;
    },
    error => console.log("error",error)
    )
  }

  onEdit(id){
    console.log("It's working")
    this.route.navigate(['/formupdate/'+id]);
  }

  onDelete(_id){
    console.log("Delete Function!",_id);
    this._enrollService.deleteData(_id).subscribe(data =>{
      this.listData = data;
      this.getUserData();
    },
    error => console.error("error",error)
    )
  }
}
