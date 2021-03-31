import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  
  // file: any;
  image: any =[];
  multipleImages:any= [];
  inputfiles: any;
  evryImage: any;
  newImageArry: any=[];
  imgg: FormData;
  // images;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }


  selectMutipleimage(event){
    console.log("hhhhhhhhh",event.target.files.length)
    // if(event.target.files.lenght > 0){
      // console.log("event.target.files",event.target.files)
      // this.multipleImages =event.target.files;
      for(let i=0;i<event.target.files.length;i++){
        this.multipleImages.push(event.target.files[i])
      }
    
    // }
    console.log("trtf",this.multipleImages);
  }

  
  onMutipleSubmit(){
    const formData = new FormData();
    if(this.multipleImages.length!= 0){
     
      for(let i=0; i<this.multipleImages.length; i++){
        
        
          formData.append('files', this.multipleImages[i]);
       
      }
    }
    console.log(formData,"coming images ")
    
    this.http.post<any>("http://localhost:4000/uploadmultiplefile", formData).subscribe(
      (res) => console.log(res),
      (err)=> console.log(err)
    )
  }

  onShow(){
    // console.log("dsd",this.multipleImages.imageUrl)
    const getData = new FormData();
    
    this.http.get<any>("http://localhost:4000/imagegallery").subscribe(
      (res) =>this.image = res.newImage,
      (err)=> console.log(err)
    )
    
    

  // onFileSelect(event){
  //   console.log("File Slected.");
  //     this.file =event.target.files[0];
  //     console.log("trtf",this.file);
  // }

  // onSubmit(){
  //   console.log("Image Uploaded!");
  //   const formData = new FormData();
  //   formData.append('file', this.file);
  //   // console.log("gh",formData);
  //   this.http.post<any>("http://localhost:4000/uploadfile", formData).subscribe(
  //     (res) => console.log(res),
  //     (err)=> console.log(err)
  //   )sdas
  // }

  
  }




    


}
