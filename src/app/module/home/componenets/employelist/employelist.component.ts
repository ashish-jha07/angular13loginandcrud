import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import {staticMessages } from 'src/app/core/constants/const';
import { ConfirmationDialogComponent } from 'src/app/module/shared/pages/confirmation-dialog/confirmation-dialog.component';
import { LoaderService } from 'src/app/module/shared/services/loader.service';
import { Employe, User } from '../../modal/employe.modal';
import { DataService } from '../../service/data.service';
import { ViewempComponent } from '../viewemp/viewemp.component';


@Component({
  selector: 'app-employelist',
  templateUrl: './employelist.component.html',
  styleUrls: ['./employelist.component.css']
})
export class EmployelistComponent implements OnInit , OnDestroy {
  employeelist  : User[]=[];
  total_pages   : number = 0;
  page_Number   : number = 1;
  per_Page      : number = 5;
  total_records : number = 0;
  sub$          = new Subject()  
  constructor(public matdialog: MatDialog , private dataservice : DataService, private loader : LoaderService) { }

  ngOnInit(): void {
  //  this.employeelist= this.dataservice.getEmployelist()
   this.getUSers(this.page_Number)
  }


/**
 * This method used in add and edit employee 
 * @param isAddmode as true or false 
 * @param data employee data
 */
  addEditModel(isAddmode :boolean, data: any){
    const dialogRef = this.matdialog.open(ViewempComponent, {
      data: {isAddmode: isAddmode , employedetails : data},
    });
    dialogRef.afterClosed().pipe(
      takeUntil(this.sub$))
    .subscribe(result => {
    
     
    });
  }


/**
 * This method used for confirmation for delete
 * @param empid as employe id
 */
  delteEmployeeConfirmation(empid :number) {
    const dialogRef = this.matdialog.open(ConfirmationDialogComponent, {
      data: {title: staticMessages.CONFIRM_EMPLOYEE_TITLE_REMOVE, body : staticMessages.CONFIRM_EMPLOYEE_REMOVE },
    });
    dialogRef.afterClosed().pipe(
      takeUntil(this.sub$))
    .subscribe((result:any) => {
      if(result){
         this.dataservice.deleteUser(empid)       
        //  this.employeelist= this.dataservice.getEmployelist()     
        // this.getUSers(this.page_Number)    
      }
    });   
  }

  //This method used track emplist
  identify(index:any, item:any){
    return item.id; 
  }

/**
 * This method used getting user list
 * @param page_Number 
 */
  getUSers(page_Number:number){
    let payload = {
      page_Number : page_Number,
      per_Page    : this.per_Page
    }
    this.loader.show()
    this.dataservice.getuserList(payload).pipe(
      takeUntil(this.sub$))
    .subscribe(res=>{
    this.loader.hide()
    this.employeelist = res?.data        
     
    this.page_Number        = res?.page;
      this.total_pages      = res?.total_pages;
      this.total_records    = res?.total

   },(err)=>{
    this.loader.hide()
    console.log(err, "err");
    
   }) 
  }

  /** This method used in pagination */
  counter(i: number){
    return new Array(i);
  }


  ngOnDestroy(): void {
    /** This statements used for unsusribe api call */
      this.sub$.next(true);
      this.sub$.complete()
      this.sub$.unsubscribe()
  }
}
