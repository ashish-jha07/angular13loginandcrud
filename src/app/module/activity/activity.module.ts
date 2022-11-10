import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityComponent } from './activity/activity.component';
import { AddEditactivityComponent } from './add-editactivity/add-editactivity.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewactivityComponent } from './viewactivity/viewactivity.component';
import { SharedModule } from '../shared/shared.module';
import { SidenavlayoutComponent } from 'src/app/layout/sidenavlayout/sidenavlayout.component';

const routes: Routes = [
  {
    path:'',
    component:SidenavlayoutComponent,
    children : [
      {
        path:'',
        redirectTo:'view',
        pathMatch:'full'
      },
      {
        path:'view',
        component:ViewactivityComponent,
      },

    ]

  }
  
];

@NgModule({
  declarations: [
    ActivityComponent,
    AddEditactivityComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ActivityModule { }
