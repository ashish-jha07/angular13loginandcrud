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
  constructor( private fb: FormBuilder) {
    this.programableCycleForm = this.fb.group({
      cyclelist: this.fb.array([
      this.fb.group(  {
          cycle       :[],
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
        cycle       :[],
        cycleName   :[],
        cycleTime   :[]
      })
    );
  }

  deletePartnerId(index: number) {
    this.programablecyclelists.removeAt(index);
  }
}
