import { Injectable } from '@angular/core';
import { ApiEndPoints } from 'src/app/core/constants/const';
import { ApiHttpService } from 'src/app/core/httpservice/api-http.service';
import { LocalStorageService } from 'src/app/core/storage/local-storage.service';
import {  map, Observable } from 'rxjs';  
import { LoginRequest } from '../modal/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private locastorageservice : LocalStorageService, private apihttpservcie: ApiHttpService) { }

  /**
   * This method used for check user login or not
   * @returns boolean value based on userDetail key exist or not in localstorage
   */
  isLogin():boolean{
    let user =  this.locastorageservice.getData('userDetail');
    if(user )
      return true;
      else
      return false;
    }



/**
 * @param data as email and password
 * @returns if sucessfull then token other wise error
 */
    login(data:LoginRequest) : Observable<any>{
        return  this.apihttpservcie.post(ApiEndPoints.LOGIN,data).pipe(
          map((res : any)=> {
              return res;
            })
        )
    }

/**
 * 
 * @param data 
 * @returns 
 */
    registerUser(data:any) : Observable<any>{
      return  this.apihttpservcie.post(ApiEndPoints.SIGNUP_USER,data).pipe(
        map((res : any)=> {
            return res;
          })
      )
  }



}

