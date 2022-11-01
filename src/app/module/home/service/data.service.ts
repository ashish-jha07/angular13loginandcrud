import { Injectable } from '@angular/core';
import { Employe } from '../modal/employe.modal';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  empList : Employe[] = [] ;

  constructor() {   }

  /**
   * This method used for return employe list
   * @returns empploye list
   */
  getEmployelist(){
    return this.empList
  }

  /**
   * This method used for add employee
   * @param employee as employee detail like name,mobile, email
   */
  addEmployee(employee :any){
   let id =  this.empList?.length  + 1
    const employe : Employe ={
      empId  :     id      ,
      name   : employee.name,
      mobile : employee.mobile,
      email  : employee.email,
      status : 'Active'
    }
    this.empList.push(employe)
  }

/**
 * This medod used for edit employe details
 * @param data as employee data
 */
  editEmployee(data: any){
    
    this.empList.map((value,index)=>{
      if(value.empId == data?.empId){
        this.empList[index] = data;
      }
     })
  }

  /**
   * This method use for delete employee
   * @param empid as employe id
   */
  deleteEmployee( empid : number){
   this.empList.map((value,index)=>{
    if(value.empId == empid){
      this.empList[index].status= 'Inactive'
    }
   })
  }

  

}
