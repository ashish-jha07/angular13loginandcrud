import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MaterialModule } from './../../core/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ViewempComponent } from './componenets/viewemp/viewemp.component';
import { EmployelistComponent } from './componenets/employelist/employelist.component';
import { LocalStorageService } from 'src/app/core/storage/local-storage.service';
import { DataService } from './service/data.service';
import { ResetpassordComponent } from './componenets/resetpassord/resetpassord.component';
import { ServicesComponent } from './componenets/services/services.component';

@NgModule({
  declarations: [
    HomeComponent,
    ViewempComponent,
    EmployelistComponent,
    ResetpassordComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    HomeRoutingModule
  ],
  providers:[ LocalStorageService, DataService]
})
export class HomeModule { }
