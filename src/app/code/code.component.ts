import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';
import { HttpClient } from "@angular/common/http";
import { HttpParams } from "@angular/common/http";
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {
	data : any;
	response : any;
  constructor(private http: HttpClient,private router: Router, private stateService: StateService,private cookieService: CookieService) { 
  	this.data = this.stateService.data;
   	this.stateService.data = undefined
  }

  submitCode(event:Event,inputCode : HTMLInputElement,inputPhone : HTMLInputElement){
  	event.preventDefault();
  	let params = new HttpParams().set("phone",this.data.phone).set("code",this.data.code);
	this.http.get("http://povar.loc/api/getToken", {params: params,observe: 'response'},)
	.subscribe((response)=>{
			this.response = response;
			if(this.response.status == 200){
				this.cookieService.set( 'token', this.response.body.access_token);
        this.router.navigate(['mypage']);
      }
			else 
				console.log("error:"+this.response.status);
		});
  	console.log(inputCode.value,inputPhone.value);
  }

  ngOnInit() {
  	
   	console.log(this.data.code);
  }

}
