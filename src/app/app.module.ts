import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS,HttpClient } from '@angular/common/http';
import { ApiErrorhandlingInterceptor } from './core/interceptor/api-errorhandling.interceptor';
import { MaterialModule } from './core/material/material.module';
import { SharedModule } from './module/shared/shared.module';
import { LoaderService } from './module/shared/services/loader.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidenavlayoutComponent } from './layout/sidenavlayout/sidenavlayout.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavlayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
{           provide:    HTTP_INTERCEPTORS,
            useClass: ApiErrorhandlingInterceptor,
            multi: true
          }, LoaderService,HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
