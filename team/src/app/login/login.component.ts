import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm, FormGroupDirective } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Email: String = "";
  pass: String = "";
  success = false;
  loginForm: FormGroup;
  name: String;
  mail;

  show = true;

   //matcher = new MyErrorStateMatcher();

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      Email: new FormControl('', [Validators.required, Validators.pattern(/^[a-z0-9_.]+$/i)]),
      password: new FormControl('', Validators.required)
    });
  }


toDash(){
  this.router.navigate(['dashboard']);
}

// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
}
