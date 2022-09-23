import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Login } from 'src/types/types';


@Component({
  selector: 'app-log-in-view',
  templateUrl: './log-in-view.component.html',
  styleUrls: ['./log-in-view.component.scss']
})
export class LogInViewComponent implements OnInit {

 public logInForm:FormGroup = this.formBuilder.group({
  email:this.formBuilder.control('', [Validators.required, Validators.email]),
  password:this.formBuilder.control('', [Validators.required, Validators.minLength(7)])
 })

  constructor(public formBuilder:FormBuilder) { 

  }

  ngOnInit(): void {
  }


  public sendLogInForm():void{
    console.log(this.logInForm.value)
  }

}
