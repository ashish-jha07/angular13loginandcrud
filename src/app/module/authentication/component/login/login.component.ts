import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder,  FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { Usercredentials } from 'src/app/core/constants/const';
import { LocalStorageService } from 'src/app/core/storage/local-storage.service';
import { Login } from '../../modal/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm       !: FormGroup;
  submitted       !: Boolean;
  errorMessage    !: string;

  constructor(private formbuilder : FormBuilder, private router: Router, private localstorageservice: LocalStorageService) {
    if(this.localstorageservice.getData("userDetail")){
      this.router.navigate(['/home'])
    }
   }


  ngOnInit(): void {
   this.errorMessage=''
   this.createloginForm() 
  }

  createloginForm(){
   this.loginForm = this.formbuilder.group({
    username : ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]]
   })
  }

// convenience geter for easy access to login form fields
  get f():  { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }


  /**
   * This method used to submit user login form
   */
  onSubmit(){
    this.submitted = true;
    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched()
      return
    } else {
      
      const userCredential :Login = {
        username : this.loginForm.value.username,
        password : this.loginForm.value.password
      }

      if(userCredential.username.toLowerCase() == Usercredentials.USER_NAME && userCredential.password == Usercredentials.PASSWORD){
        this.localstorageservice.setData("userDetail",userCredential)
        this.router.navigate(['/home'])
      } else {
        this.errorMessage = "Username and password not matched."
      } 
  }
  }
}
