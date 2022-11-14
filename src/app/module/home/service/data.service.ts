import { Injectable } from '@angular/core';
import { ApiEndPoints } from 'src/app/core/constants/const';
import { ApiHttpService } from 'src/app/core/httpservice/api-http.service';
import { Employe, UserListrequest, UserListresponse } from '../modal/employe.modal';
import {  map, Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class DataService {
  empList     : Employe[] = [] ;
  private  addressList =[{
    city : 'jaipur',
    state : 'rajasthan',
    country : 'India'
  },
  {
    city : 'Ajmer',
    state : 'rajasthan',
    country : 'India'
  },
  {
    city : 'jaipur',
    state : 'rajasthan',
    country : 'AU'
  }
] ;
  constructor(private apihttpservcie : ApiHttpService) {   }

  getAddressList(){
    return this.addressList
  }
  getfiltedrCity(cityName : string){
    this.addressList=  this.addressList.filter((item)=>{
     return item.city.toLocaleLowerCase() == cityName.toLocaleLowerCase()
    })
    return this.addressList;
  }

  


  /**
   * This method use for delete address
   * @param index
   */
   deleteAddress( index : number){
    this.addressList.splice(index,1)
   }

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

/**
 * 
 * @param data as page number and per page records number
 * @returns user list
 */
  getuserList(data:UserListrequest) : Observable<UserListresponse>{
    return  this.apihttpservcie.get(ApiEndPoints.USER_LIST+data?.page_Number + '&per_page='+data?.per_Page).pipe(
      map((res : UserListresponse)=> {
          return res;
        })
    )
}

deleteUser(userID:number) : Observable<any>{
  return  this.apihttpservcie.delete(ApiEndPoints.USER+Number(userID)).pipe(
    map((res : any)=> {
        return res;
      })
  )
}

createUser(data:any) : Observable<any>{
  return  this.apihttpservcie.post(ApiEndPoints.CREATE_USER, data).pipe(
    map((res : any)=> {
        return res;
      })
  )
}

}
