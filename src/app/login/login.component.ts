import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup ;
  // student: Student;
  successMessage : string | null;
  errorMessage: string | null;

  constructor(private formBuilder : FormBuilder,private service :RegisterService, private rtr:Router)
  {}

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      user_id:["",[Validators.required]],
      password:["",[Validators.required]]
    })
  }

  LoginUser(){
    console.log(this.loginForm)
    this.successMessage=null;
    this.errorMessage=null;
    this.service.loginUser(this.loginForm.value).subscribe(
      (data) =>
      {
        console.log("data");
        console.log(data);
        this.errorMessage = data;
      },
      error =>{
        console.log("error");
        console.log(error);
        if(error.error.text=="Login successful"){
          localStorage.setItem("uname","success");
          this.rtr.navigate(["sampleWebPage"])
          this.successMessage= error.error.text;
        }else if(error.error.text=="You cannot login as Course duration is expired! Please Register Again!"){
          this.errorMessage= error.error.text;
        }else{
          this.errorMessage= error.error;
        }
        
        
      }   
      )
  }
}