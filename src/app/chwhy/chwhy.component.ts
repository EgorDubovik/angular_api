import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpParams } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chwhy',
  templateUrl: './chwhy.component.html',
  styleUrls: ['./chwhy.component.css']
})
export class ChwhyComponent implements OnInit {
  response : any;
  token : any;
  headers: any;
  constructor(private http: HttpClient,private router: Router, private cookieService: CookieService) {
  	this.token = this.cookieService.get('token');
	this.headers = new HttpHeaders({
	    'Content-Type': 'application/json',
	    'Authorization': 'Bearer '+this.token 
	});
  }

  saveTypeUser(event : Event, formInput : any){
  	event.preventDefault();

  	if(formInput.who.value==1 || formInput.who.value==2){
  		(document.querySelector('.spinner-border') as HTMLElement).style.display = 'inline-block';
  		let params = {"is_coocked":formInput.who.value}; 
  		this.http.post("http://povar.loc/api/setTypeCustomer",params,{headers:this.headers})
  		.subscribe((response)=>{
			this.response = response;
			console.log(this.response);
			(document.querySelector('.spinner-border') as HTMLElement).style.display = 'none';
			if(this.response.status=="true"){
				this.router.navigate(['mypage']);
			}
		});
  	}
  	
  }

  ngOnInit() {
  }

}
