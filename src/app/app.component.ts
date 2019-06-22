import { Component } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms'
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  myFormControl:FormControl;
  constructor(){
    this.myFormControl = new FormControl("Karthi")
  }
}
