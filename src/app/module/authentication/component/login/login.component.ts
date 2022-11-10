import { Component, OnInit, OnDestroy } from '@angular/core';
import { AbstractControl, FormBuilder,  FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { LocalStorageService } from 'src/app/core/storage/local-storage.service';
import { LoaderService } from 'src/app/module/shared/services/loader.service';
import { Login, LoginRequest } from '../../modal/login';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit , OnDestroy{
  loginForm       !: FormGroup;
  submitted       !: Boolean;
  errorMessage    !: string;
  sub$             = new Subject()


  constructor(private formbuilder : FormBuilder, private router: Router, private localstorageservice: LocalStorageService, private authservice : AuthService, private loader: LoaderService) {
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
      const userCredential : LoginRequest = {
        email : this.loginForm.value.username,
        password : this.loginForm.value.password
      }
      this.loader.show()
      this.authservice.login(userCredential).pipe(
        takeUntil(this.sub$))
      .subscribe((res) => {
        this.loader.hide()
        if(res?.token){
          this.localstorageservice.setData("userDetail",res?.token)
          this.router.navigate(['/home'])
        }
        
      },(err)=>{
        this.loader.hide()
        // console.log(err,"error");
        this.errorMessage = err['error']['error']
      }
      )

  }
  }


  	/**This function are used for destroy the data**/
	  ngOnDestroy(): void {
		   /** This statements used for unsusribe api call */
       this.sub$.next(true);
       this.sub$.complete()
       this.sub$.unsubscribe()
	  }
}
