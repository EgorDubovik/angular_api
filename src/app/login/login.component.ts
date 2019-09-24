import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {HttpParams} from "@angular/common/http";
import { Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
	
	response : any;
	phone : string;
	
	constructor(private http: HttpClient,private router: Router) { 

	}

	submitPhone(event : Event, inputPhone : HTMLInputElement){
		
		event.preventDefault();
		this.phone = inputPhone.value;
		let params = new HttpParams().set("phone",this.phone);
		this.http.get("http://povar.loc/api/getCode", {params: params})
		.subscribe((response)=>{
			this.response = response;
			console.log(response);
			if(this.response.status){
				console.log("true");
				this.router.navigate(['code']);
			} else {
				console.log(response);
			}
		});

	}

	ngOnInit() {
	}

}
