import { Component, Input, OnInit,ViewChild,ViewContainerRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { staticMessages } from 'src/app/core/constants/const';
import { LocalStorageService } from 'src/app/core/storage/local-storage.service';
import { Login } from '../../../authentication/modal/login';
import { SidenavService } from '../../services/sidenav.service';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user !: Login
  toogle !: boolean;
  constructor(public dialog: MatDialog, private localStorageService: LocalStorageService, private sidenavser: SidenavService, private route: Router) {
    
   }

  ngOnInit(): void {
    this.toogle =  this.route.url.includes('activity')
    
    this.user = this.localStorageService.getData('userDetail') ;
  }

  toggle(){
    this.sidenavser.toggle()
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

  navigateTo(data:any){
    this.route.navigate([data])
  }

}
