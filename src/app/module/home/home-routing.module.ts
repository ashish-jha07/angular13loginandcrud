import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavlayoutComponent } from 'src/app/layout/sidenavlayout/sidenavlayout.component';
import { EmployelistComponent } from './componenets/employelist/employelist.component';
import { ResetpassordComponent } from './componenets/resetpassord/resetpassord.component';
import { ServicesComponent } from './componenets/services/services.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path:'',
    component:SidenavlayoutComponent,
    children : [
      {
        path:'',
       component:EmployelistComponent,
      },
      {
        path:'resetpassword',
       component:ResetpassordComponent,
      },
      {
        path: 'services',
        component: ServicesComponent
      }
    ]

  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
