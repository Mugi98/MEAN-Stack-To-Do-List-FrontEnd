import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnrolldataService {

  _url = 'http://localhost:4000/enroll';
  

  constructor(private _http: HttpClient) { }

  enroll(user: any){
    console.log(user);
    return this._http.post<any>(this._url, user);
  } 
 
  getData(){
    return this._http.get('http://localhost:4000/formlist');
  }

  deleteData(_id){
    var body={
      id:_id
    }
    return this._http.post('http://localhost:4000/deleteform/',body);
  }

  updateData(id){
   
    return this._http.get('http://localhost:4000/getDatabyid/'+id);
  }

  postupdatedData(data){
   console.log("sdad", data);
    return this._http.post('http://localhost:4000/updateform/',data);
  }

}
