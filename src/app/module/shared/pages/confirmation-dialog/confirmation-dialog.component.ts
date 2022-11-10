import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent implements OnInit {

  constructor(    public matDialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }
  /**
   * This method  Close the dialog, return true
   */
  onConfirm(): void {
    this.matDialogRef.close(true);
  }

  /**
   * This method  Close the dialog, return false
   */
  onDismiss(): void {
    this.matDialogRef.close(false);
  }
}
