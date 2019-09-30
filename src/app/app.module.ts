import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from "@angular/common/http";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { CodeComponent } from './code/code.component';
import { StateService } from './state.service';
import { CookieService } from 'ngx-cookie-service';
import { ChwhyComponent } from './chwhy/chwhy.component';
import { MypageComponent } from './mypage/mypage.component';

const appRoutes : Routes = [
	{path : 'login', component:LoginComponent},
  {path : 'code', component:CodeComponent},
  {path : "mypage", component:MypageComponent},
  {path : "chwhy", component:ChwhyComponent},
  {path : '', component:IndexComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    CodeComponent,
    ChwhyComponent,
    MypageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    StateService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
