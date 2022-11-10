import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ConfirmationDialogComponent } from './pages/confirmation-dialog/confirmation-dialog.component';
import { LoaderComponent } from './pages/loader/loader.component';
import { MaterialModule } from './../../core/material/material.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ConfirmationDialogComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,

  ], 


  exports:[
    HeaderComponent,
    FooterComponent,
    ConfirmationDialogComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
