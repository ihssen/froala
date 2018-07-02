import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FroalaComponent } from './froala/froala.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { FroalaModule } from './froala/froala.module';


const appRoutes: Routes = [  
  {
    path: '',
    component: AcceuilComponent,
    pathMatch: 'full',
  },
  {
    path: 'froala',
    component: FroalaComponent,
  }
  
];

@NgModule({
  declarations: [
    AppComponent,
    
    AcceuilComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FroalaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
