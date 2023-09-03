import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';;

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent {
  
  forgetForm: FormGroup ;
  // student: Student;
  successMessage : string | null;
  errorMessage: string | null;

  constructor(private formBuilder : FormBuilder,private service :RegisterService, private rtr:Router)
  {}

  ngOnInit(): void {
    this.forgetForm=this.formBuilder.group({
      user_id:["",[Validators.required]],
      password:["",[Validators.required]]
    })
  }

  LoginUser(){
    console.log(this.forgetForm)
    this.successMessage=null;
    this.errorMessage=null;
    this.service.forgotPassword(this.forgetForm.value).subscribe(
      (data) =>
      {
        console.log("data");
        console.log(data);
        this.errorMessage = data;
      },
      error =>{
        console.log("error");
        console.log(error);
        // if(error.error.text=="Login successful"){
          // this.rtr.navigate(["sampleWebPage"])
          this.successMessage= error.error.text;
          // this.errorMessage= error.error;
        // }
        
        
      }   
      )
  }

}
