import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from "@angular/common";
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NavbarComponent } from './navbar/navbar.component';
import { TestDetailsService } from './test-details.service';
import { InputOutputComponent } from './input-output/input-output.component';
import { OutputInputComponent } from './output-input/output-input.component';
import {  HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    routingComponents,
    InputOutputComponent,
    OutputInputComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [TestDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log("App Module Loaded.")
  }
 }
