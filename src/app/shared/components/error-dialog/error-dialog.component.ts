import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.scss']
})
export class ErrorDialogComponent {

  //iremmos injetar o tipo de MAT_DIALOG_DATA (tratamento de error)
  constructor(@Inject(MAT_DIALOG_DATA) public data: string) {}


}
