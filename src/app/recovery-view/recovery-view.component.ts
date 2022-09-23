import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-recovery-view',
  templateUrl: './recovery-view.component.html',
  styleUrls: ['./recovery-view.component.scss']
})
export class RecoveryViewComponent implements OnInit {

  public emailForm: FormControl = new FormControl('', [Validators.required, Validators.email])

  constructor() { }


  ngOnInit(): void {
    console.log(this.emailForm)
  }

  public sendLogInForm(): void {
    console.log(this.emailForm.value)
    window.open('mailto:' + this.emailForm.value);
  }

}
