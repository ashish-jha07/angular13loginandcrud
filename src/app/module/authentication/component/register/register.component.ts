import { Component, OnInit, OnDestroy } from '@angular/core';
import { AbstractControl, FormBuilder,  FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { LocalStorageService } from 'src/app/core/storage/local-storage.service';
import { LoaderService } from 'src/app/module/shared/services/loader.service';
import { Login } from '../../modal/login';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signupForm      !: FormGroup;
  submitted       !: Boolean;
  errorMessage    !: string;

  constructor(private formbuilder : FormBuilder, private router: Router, private localstorageservice: LocalStorageService, private authservice : AuthService, private loader : LoaderService) {
    if(this.localstorageservice.getData("userDetail")){
      this.router.navigate(['/home'])
    }
   }


  ngOnInit(): void {
   this.errorMessage=''
   this.createsignupForm() 
  }

  createsignupForm(){
   this.signupForm = this.formbuilder.group({
    username : ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
   })
  }

// convenience geter for easy access to login form fields
  get f():  { [key: string]: AbstractControl } {
    return this.signupForm.controls;
  }


  /**
   * This method used to submit user login form
   */
  onSubmit(){
    this.submitted = true;
    if(this.signupForm.invalid){
      this.signupForm.markAllAsTouched()
      return
    } else {
      const userCredential  = {
        username : this.signupForm.value.username,
        email : this.signupForm.value.email,
        password : this.signupForm.value.password
      }
  
      this.loader.show()
      this.authservice.registerUser(userCredential)
      .subscribe((res) => {
        this.loader.hide()
          this.router.navigate(['/auth/login'])
      },(err)=>{
        this.loader.hide()
        this.errorMessage = err['error']['error']
      }
      )

  }
  }


	  ngOnDestroy(): void {
	  }
}