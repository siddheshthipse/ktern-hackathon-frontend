import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({})

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      jiraEmail: ['', Validators.required],
      jiraToken: ['', Validators.required],
    });
  }

  submitLoginForm(){
    console.log(this.loginForm.value);
    this.loginForm.reset();
  }
}
