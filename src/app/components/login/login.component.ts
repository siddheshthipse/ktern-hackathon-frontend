import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({})

  constructor(private formBuilder:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      jiraEmail: ['', Validators.required],
      jiraToken: ['', Validators.required],
    });
  }

  submitLoginForm(){
    console.log(this.loginForm.value);
    this.loginForm.reset();
    this.router.navigate(['project-launchpad']);
  }
}
