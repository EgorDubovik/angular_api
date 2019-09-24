import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from "@angular/common/http";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { CodeComponent } from './code/code.component';

const appRoutes : Routes = [
	{path : 'login', component:LoginComponent},
  {path : 'code', component:CodeComponent},
  {path : '', component:IndexComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    CodeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
