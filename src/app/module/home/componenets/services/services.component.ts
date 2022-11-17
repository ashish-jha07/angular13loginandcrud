import { Component, OnInit } from '@angular/core';
// import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { AbstractControl, FormBuilder,  FormGroup, Validators ,FormArray} from '@angular/forms';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  programableCycleForm !: FormGroup 
  submited              = false
  constructor( private fb: FormBuilder) {
    this.programableCycleForm = this.fb.group({
      cyclelist: this.fb.array([
      this.fb.group(  {
          cycle       :['',Validators.required],
          cycleName   :[],
          cycleTime   :[]
        })
      ])
    });
   }

  ngOnInit(): void {

  }

  get programablecyclelists() {
    return this.programableCycleForm.get('cyclelist') as FormArray;
  }
  addProgrambleCycle() {    
    this.programablecyclelists.push(
      this.fb.group(  {
        cycle       :['',[Validators.required]],
        cycleName   :[],
        cycleTime   :[]
      })
    );
  }

  deletePartnerId(index: number) {
    this.programablecyclelists.removeAt(index);
  }


  save(){
    this.submited = true;
    if((<FormArray>this.programableCycleForm.get('cyclelist')).length==1)
    this.clearValidations()
    else {
      this.setValidation()
    }
    debugger
    console.log(this.programableCycleForm.value , this.programableCycleForm.valid);
    
    this.programableCycleForm.markAllAsTouched()
    return
  }
  // worked on assigment  and submit to dhawal
  // helped vikash  subcategory validations and dublicate value etc..
  clearValidations(): void {
    debugger
    (<FormArray>this.programableCycleForm.get('cyclelist')).controls.forEach(c =>{
      console.log(c, "test");
      c.get('cycle')?.clearValidators()
      c.get('cycle')?.updateValueAndValidity()
      });

}

setValidation(): void {
  (<FormArray>this.programableCycleForm.get('cyclelist')).controls.forEach(c =>{
    console.log(c, "test");
    c.get('cycle')?.setValidators(Validators.required)
    c.get('cycle')?.updateValueAndValidity()
    });
}
}
