import { Injectable } from '@angular/core';
import { AES, enc } from 'crypto-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  encryptKey = environment.encryptKey;

  constructor() { }

/**
 * This method used for encrypt data
 * @param data as user data to be encryption
 * @param key as encryption key
 * @returns encrypted string of user data
 */
  encrypt(data: string, key: string = this.encryptKey): string {
    return AES.encrypt(data, key).toString();
  }

  /**
 * This method used for decrypt data
 * @param data as user data to be decrypt
 * @param key as encryption key 
 * @returns decrypted data
 */
  decrypt(data: string, key: string = this.encryptKey): string {
    return AES.decrypt(data, key).toString(enc.Utf8);
  }

/**
 * This method comined array
 * @param array1 
 * @param array2 
 * @returns combined array
 */
  cobineArray(array1 : Array<any>,array2:Array<any>){
    return [].concat(...array1,...array2)
  }
}
