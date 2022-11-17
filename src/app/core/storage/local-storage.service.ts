import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from '../utility services/utility.service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(private utilService : UtilityService, private router :Router) { }

  /**
   * This method used for store data in localstorage
   * @param key 
   * @param value 
   */
  setData(key: string, value: any)
  {
    localStorage.setItem(key, this.utilService.encrypt(JSON.stringify(value)));
  }

  /**
   * This method used for getdata from localstorage
   * @param key 
   * @returns 
   */
  getData(key: string)
  {
    if(localStorage.getItem(key))
    return JSON.parse(this.utilService.decrypt(localStorage.getItem(key) || ''));
    else
    return false;
  }

  /**
   * This method used for remove key from localstorage
   * @param key 
   * @returns 
   */
   removeData(key: string)
   {
     if(localStorage.getItem(key))
      localStorage.removeItem(key) ;
    
   }
/**
 * This method used for logout
 */
  logout(){
    localStorage.clear();
    this.router.navigate(['/auth/login']);
  }
}
