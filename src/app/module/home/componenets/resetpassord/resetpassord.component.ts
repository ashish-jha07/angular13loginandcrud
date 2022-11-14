import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilityService } from 'src/app/core/utility services/utility.service';


@Component({
  selector: 'app-resetpassord',
  templateUrl: './resetpassord.component.html',
  styleUrls: ['./resetpassord.component.css']
})

export class ResetpassordComponent implements OnInit {
  selectYear             : any;
  ageCalculatorForm     !: FormGroup;
  currnetDate            = new Date()
  array1                 = [1,2,3]
  array2                 = [3,4,5]
  valueCp                = this.array1.slice();
  valueCp1               = this.array2.slice();
  refCp                  = this.array1;
  refCp1                 = this.array2;
  constructor(private formbuilder : FormBuilder, private  utilityService: UtilityService) { }
  

  ngOnInit(): void {
   console.log(this.utilityService.cobineArray(this.array1,this.array2), "combine aray");
    this.createloginForm()
    this.array1[0]=10;
    this.refCp[0] = 505
    let array4 = this.valueCp.concat(this.valueCp1);
    let array3 = [...this.array1, ...this.array2];
    console.log(array3,array4, this.array1, this.array2 ,"test", this.valueCp, this.valueCp1, this.refCp, this.refCp1)
    
  }

  
  createloginForm(){
    this.ageCalculatorForm = this.formbuilder.group({
     month           : ['', Validators.required],
     year            : ['', [Validators.required]],
     termCondition   : [false, Validators.requiredTrue]
    })
   }
  

  counter(i: number){
    return new Array(i);
  }

  getYears(){
    return  Array.from(Array((this.currnetDate.getFullYear()+1)-1950),(_,i)=>(i+1950).toString())
  }

  checkDob(event:any){
    console.log(event?.target?.checked);
    
    if(event?.target?.checked){
      if(this.ageCalculatorForm.valid){
        let age = Math.abs(this.currnetDate.getFullYear() - this.ageCalculatorForm.value.year )
        let month 
        if(this.currnetDate.getMonth()+1 >= this.ageCalculatorForm.value.month){
          month = this.currnetDate.getMonth()+1 - this.ageCalculatorForm.value.month;
        } else {
          if(age>0)
          age--

          month= 12+ (this.currnetDate.getMonth()+1 - this.ageCalculatorForm.value.month)
        }
        console.log(age, "age", month);
        if(age>=18){
          confirm("you are elible for vote")
        } else {
          confirm("your age less than 18")
        }
      } else {
        this.ageCalculatorForm.markAllAsTouched();
        confirm("please select month and year")
        return
      }
    }
  }

  
  
  // concat
  
}
