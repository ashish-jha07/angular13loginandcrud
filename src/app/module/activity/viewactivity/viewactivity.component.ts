import { Component, OnDestroy, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/core/storage/local-storage.service';
export interface Bookings {
  name                 : string;
  isAllselected        : boolean;
  totalRefundedAmount  :number;
  isRefundedAll        :boolean;
  bookingData          : BookingData[];
}
export interface BookingData {
  id                   : number;
  isRefunded           : boolean;
  price                : number;
  isSelected           :boolean;
  name                 : string;
}

@Component({
  selector: 'app-viewactivity',
  templateUrl: './viewactivity.component.html',
  styleUrls: ['./viewactivity.component.css']
})
export class ViewactivityComponent implements OnInit, OnDestroy {
  
  bookings : Bookings = {
    name               : 'Select/UnSelect All',
    isAllselected      : false,
    totalRefundedAmount: 0,
    isRefundedAll      : false,
    bookingData: [
      {id:1,price:100,name: 'A' ,isSelected:false, isRefunded: false},
      {id:2,price:200,name: 'B', isSelected:false, isRefunded: false},
      {id:3,price:300,name: 'C', isSelected:false, isRefunded: false}
    ],
  };

  constructor(private storageService : LocalStorageService) { 
    
  }

  ngOnInit(): void {
    if(this.storageService.getData("bookingData")){
    this.bookings = this.storageService.getData("bookingData");
    }

  }

  setUncheckedAll(){
    this.bookings.bookingData.forEach((element:any) => {
      
      if(!element.isRefunded){
      element.isSelected = this.bookings.isAllselected;
      if(this.bookings.isAllselected && !element.isRefunded){
      this.bookings.totalRefundedAmount += element.price
      } else {        
        this.bookings.totalRefundedAmount -= element.price
        }
      }
    });
    this.storageService.setData("bookingData",this.bookings)
  }

  updateAllChecked(data:any){
    this.bookings.isAllselected = this.bookings.bookingData != (null||undefined) && this.bookings.bookingData.every((item:any)=>{       
       return item.isSelected==true
    })
    if(data.isSelected){
      this.bookings.totalRefundedAmount += data.price
      } else {        
          this.bookings.totalRefundedAmount -=  data.price
        }
    this.storageService.setData("bookingData",this.bookings)
  }

  refunded(){

    this.bookings.bookingData.forEach((element:any, index:number)=>{
        if(element.isSelected){
          element.isRefunded = true;
          
        } 
    })
    this.bookings.isRefundedAll = this.bookings.bookingData != (null||undefined) && this.bookings.bookingData.every((item:any)=>{ 
      return item.isRefunded==true
   })

   this.bookings.totalRefundedAmount = 0;
    this.storageService.setData("bookingData",this.bookings)
  }


ngOnDestroy(): void {
  this.storageService.removeData('bookingData')  
}  
}
