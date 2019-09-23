import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
	
	response : any;

	constructor(private http: HttpClient) { 

	}

	submitPhone(event : Event, inputPhone : HTMLInputElement){
		event.preventDefault();
		console.log(inputPhone.value);
		this.http.get("http://povar.loc/api/test")
		.subscribe((response)=>{
			this.response = response;
			console.log(response);
		});

	}

	ngOnInit() {
	}

}
