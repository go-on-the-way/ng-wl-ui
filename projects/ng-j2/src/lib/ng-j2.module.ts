import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgJ2Component } from './ng-j2.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgJ2Component, FileUploadComponent],
  exports: [NgJ2Component, FileUploadComponent]
})
export class NgJ2Module { }
