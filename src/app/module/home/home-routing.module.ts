import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployelistComponent } from './componenets/employelist/employelist.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    children : [
      {
        path:'',
       component:EmployelistComponent,
      }
    ]

  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
