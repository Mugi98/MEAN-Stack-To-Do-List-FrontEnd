import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private route:Router) { }

  todolistRoute(){
    this.route.navigate(['/todolist']); 
  }
  lodashRoute(){
    this.route.navigate(['/lodash']);
  }
  ngdirectiveRoute(){
    this.route.navigate(['/ngdirective']);
  }
  serviceRoute(){
    this.route.navigate(['/employeeService']);
  }
  formTemplateRoute(){
    this.route.navigate(['/formTemplate']);
  }
  formReactiveRoute(){
    this.route.navigate(['/reactiveform']);
  }
  InputOutputRoute(){
    this.route.navigate(['/io']);
  }
  lazyRoute(){
    this.route.navigate(['/admin']);
  }
  finalFormRoute(){
    this.route.navigate(['/finalform']);
  }
  formListRoute(){
    this.route.navigate(['/formlist']);
  }
  updateFormRoute(){
    this.route.navigate(['/formupdate']);
  }
  imageRoute(){
    this.route.navigate(['/uploadimage']);
  }
  galleryRoute(){
    this.route.navigate(['/gallery']);
  }
  
  
  ngOnInit(): void {
  }

}
