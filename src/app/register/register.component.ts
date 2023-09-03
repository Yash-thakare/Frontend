import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { Student } from '../Student';
import { CustomValidators } from 'src/CustomValidators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup ;
  student: Student;
  successMessage : string | null;
  errorMessage: string | null;

  constructor(private formBuilder : FormBuilder,private service :RegisterService, private rtr:Router)
  {}

  ngOnInit(): void {
    this.registerForm=this.formBuilder.group({
      full_name:["",Validators.compose([
        // CustomValidators.checkName,
        Validators.maxLength(25),
        Validators.minLength(5),
        Validators.pattern('[a-zA-Z0-9]*[a-zA-Z]+[a-zA-Z0-9]*$'),
        Validators.required
      ])],
      email_id:["",[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      contact_number:["",[Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      gender:["",[Validators.required]],
      course_id:["",[Validators.required]],
      password:["",[Validators.required]]
    })
  }

  AddUser(){
    console.log(this.registerForm)
    this.successMessage=null;
    this.errorMessage=null;
    this.service.addUser(this.registerForm.value).subscribe(
      (data) =>
      {
        console.log("data");
        console.log(data);
        this.errorMessage = data;
      },
      error =>{
        console.log("error");
        console.log(error);
        if(error.error=="Email Already Exists. You Cannot Register!"){
          this.errorMessage= error.error;
        }else{
          this.successMessage= error.error.text;
        }
        
        
      }   
      )
  }
}
