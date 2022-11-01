import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Employe } from '../../modal/employe.modal';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {
  public employeeDetailForm !: FormGroup;

  constructor(public matDialogRef: MatDialogRef<AddEditEmpComponent>,@Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder ) { 
    
  }

  ngOnInit(): void {
    this.createEmpForm()
    //In edit case value patch in form
    if(!this.data?.isAddmode){
      this.employeeDetailForm.patchValue({
        'name' : this.data?.employedetails.name,
        'email' : this.data?.employedetails.email,
        'mobile' : this.data?.employedetails.mobile
      });
  }
  }

/**
 * This method used create employee form
 */
  createEmpForm(){
    this.employeeDetailForm = this.formBuilder.group({
      name : ['', [Validators.required , Validators.minLength(2), Validators.maxLength(25), this.noWhitespaceValidator]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required,Validators.minLength(8),Validators.maxLength(10), Validators.pattern("^[0-9]*$")]]
  })

}


// this method used for close dialog
  public onCancel() {
    this.matDialogRef.close(false);
  }


  /**
   * This method used in add edit emp form
   * @returns employess details
   */
  addUpdateEmployee(){
    if(!this.employeeDetailForm.valid){
      this.employeeDetailForm.markAllAsTouched()
      return
    } else{
    if(this.data?.isAddmode)
    this.matDialogRef.close(this.employeeDetailForm.value);
    else{
      const employe : Employe ={
        empId  :     this.data?.employedetails.empId      ,
        name   : this.employeeDetailForm.get('name')?.value,
        mobile : this.employeeDetailForm.get('mobile')?.value,
        email  : this.employeeDetailForm.get('email')?.value,
        status : this.data?.employedetails.status
      }
      this.matDialogRef.close(employe);
    }
  }
}


public noWhitespaceValidator(control: FormControl) {
  const isWhitespace = (control.value || '').trim().length === 0;
  const isValid = !isWhitespace;
  return isValid ? null : { 'whitespace': true };
}
}
