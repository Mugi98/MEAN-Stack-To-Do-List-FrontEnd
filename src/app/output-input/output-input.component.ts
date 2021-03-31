import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-input',
  templateUrl: './output-input.component.html',
  styleUrls: ['./output-input.component.css']
})
export class OutputInputComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {  
  }
  // @Input() myInput: any;
  // @Output() myOutput: EventEmitter<any>= new EventEmitter();
  // outputString ="Nimbalkar";
  // OnClick(){
  //   console.log(this.myInput)
  // }
  // sendData(){
  //   this.myOutput.emit(this.outputString);
  // }
}
