import { Injectable } from '@angular/core';
import { LocalStorageService } from 'src/app/core/storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private locastorageservice : LocalStorageService) { }

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
}
