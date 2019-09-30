import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpParams } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.css']
})
export class MypageComponent implements OnInit {
	response : any;
	token : any;
	headers: HttpHeaders = new HttpHeaders();
	constructor(private http: HttpClient, private cookieService: CookieService, private router: Router) { 
		this.token = this.cookieService.get('token');
		this.headers = this.headers.set('Authorization', 'Bearer '+this.token);
		this.headers = this.headers.set('Content-Type', 'application/json');
	}

	ngOnInit() {
		this.http.get("http://povar.loc/api/getUser", { headers: this.headers})
		.subscribe((response)=>{
			this.response = response;
			console.log(this.response);
			if(this.response.is_coocked==0){
				this.router.navigate(['chwhy']);
			}

		});
	}

}
