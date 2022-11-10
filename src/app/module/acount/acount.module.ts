import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SidenavlayoutComponent } from 'src/app/layout/sidenavlayout/sidenavlayout.component';
import { UserlistComponent } from './pages/userlist/userlist.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from './../../core/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEditEmpComponent } from './pages/add-edit-emp/add-edit-emp.component';

const routes: Routes = [
  {
    path:'',
    component:SidenavlayoutComponent,
    children : [
      {
        path:'',
       component:UserlistComponent,
      },

     
    ]

  }
  
];

@NgModule({
  declarations: [ UserlistComponent, AddEditEmpComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AcountModule { }
