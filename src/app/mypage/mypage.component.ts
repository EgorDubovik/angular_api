import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpParams } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.css']
})
export class MypageComponent implements OnInit {
	response : any;
	token : any;
	headers: HttpHeaders = new HttpHeaders();
	constructor(private http: HttpClient, private cookieService: CookieService) { 
		this.token = this.cookieService.get('token');
		// this.headers = this.headers.append('Authorization', 'Bearer '+this.token);
		// this.headers = this.headers.append('Content-Type', 'application/json');
	}

	ngOnInit() {
		console.log(this.token);
		this.http.get("http://povar.loc/api/getUserr", { headers: this.headers})
		.subscribe((response)=>{
			//console.log(response);
		});
	}

}
