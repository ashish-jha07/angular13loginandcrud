import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {staticMessages } from 'src/app/core/constants/const';
import { ConfirmationDialogComponent } from 'src/app/module/shared/confirmation-dialog/confirmation-dialog.component';
import { Employe } from '../../modal/employe.modal';
import { DataService } from '../../service/data.service';
import { AddEditEmpComponent } from '../add-edit-emp/add-edit-emp.component';


@Component({
  selector: 'app-employelist',
  templateUrl: './employelist.component.html',
  styleUrls: ['./employelist.component.css']
})
export class EmployelistComponent implements OnInit {
  employeelist : Employe[]=[];
  constructor(public matdialog: MatDialog , private dataservice : DataService) { }

  ngOnInit(): void {
   this.employeelist= this.dataservice.getEmployelist()
  }


/**
 * This method used in add and edit employee 
 * @param isAddmode as true or false 
 * @param data employee data
 */
  addEditModel(isAddmode :boolean, data: any){
    const dialogRef = this.matdialog.open(AddEditEmpComponent, {
      data: {isAddmode: isAddmode , employedetails : data},
    });
    dialogRef.afterClosed().subscribe(result => {
     if(result){
      if(isAddmode == true){
        this.dataservice.addEmployee(result)                
      } else {
        this.dataservice.editEmployee(result)
      }
      this.employeelist= this.dataservice.getEmployelist()
     }
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
    dialogRef.afterClosed().subscribe((result:any) => {
      if(result){
         this.dataservice.deleteEmployee(empid)       
         this.employeelist= this.dataservice.getEmployelist()         
      }
    });   
  }

  //This method used track emplist
  identify(index:any, item:any){
    return item.empId; 
  }

}