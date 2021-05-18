

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import {InputTextModule} from 'primeng/inputtext';
import { AppComponent } from './app.component';
import {AccordionModule} from 'primeng/accordion';  
import {CardModule} from 'primeng/card';
import { LoginComponent } from './views/login/login.component';
import {ButtonModule} from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AccordionModule,
    CardModule,
    FormsModule,
    RouterModule,
    InputTextModule,
    ButtonModule,
    AppRoutingModule,
    HttpClientModule,

    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
