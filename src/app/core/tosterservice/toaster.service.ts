import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private snackBar:MatSnackBar) { }

/**
   * @param message  string
   * @param action   action 
   * @param duration as time
   */
  openToastMessage(message: string, action: string) {
    this.snackBar.open(message, action, {
       duration: 3000,
       horizontalPosition: "right",
       verticalPosition:   "top",
    });
  }
}
