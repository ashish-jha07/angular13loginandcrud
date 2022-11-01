import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { staticMessages } from 'src/app/core/constants/const';
import { LocalStorageService } from 'src/app/core/storage/local-storage.service';
import { Login } from '../../authentication/modal/login';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user !: Login
  constructor(public dialog: MatDialog, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.user = this.localStorageService.getData('userDetail') ;
  }

  logoutConfirmation() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {title: staticMessages.LOGOUT_TITLE, body : staticMessages.LOGOUT_WARNING },

    });
    dialogRef.afterClosed().subscribe((result:any) => {
      if (result)
      this.logout()
    });   
  }


  logout(){
    this.localStorageService.logout()
  }
}
