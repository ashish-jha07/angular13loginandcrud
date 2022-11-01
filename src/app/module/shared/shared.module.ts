import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule
  ], 

  exports:[
    HeaderComponent,
    FooterComponent,
    ConfirmationDialogComponent
  ]
})
export class SharedModule { }
