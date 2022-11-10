import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { MaterialModule } from './../../core/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './component/login/login.component';
import { LocalStorageService } from 'src/app/core/storage/local-storage.service';
import { AuthService } from './service/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { ApiHttpService } from 'src/app/core/httpservice/api-http.service';
import { RegisterComponent } from './component/register/register.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    
    AuthenticationRoutingModule
  ],
  providers:[LocalStorageService, AuthService]
})
export class AuthenticationModule { }
