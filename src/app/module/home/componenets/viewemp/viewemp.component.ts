import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './viewemp.component.html',
  styleUrls: ['./viewemp.component.css']
})
export class ViewempComponent implements OnInit {
  public employeeDetailForm !: FormGroup;

  constructor(public matDialogRef: MatDialogRef<ViewempComponent>,@Inject(MAT_DIALOG_DATA) public data: any ) { 
    
  }

  ngOnInit(): void {
   
  }




// this method used for close dialog
  public onCancel() {
    this.matDialogRef.close(false);
  }




}
