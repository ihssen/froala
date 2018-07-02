import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { FroalaComponent } from './froala.component';


@NgModule({
  imports: [
    CommonModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  declarations: [
    FroalaComponent
  ]
})
export class FroalaModule { }
