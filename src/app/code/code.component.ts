import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {

  constructor() { }

  submitCode(event:Event,inputCode : HTMLInputElement){
  	event.preventDefault();
  	console.log(inputCode.value);
  }

  ngOnInit() {
  }

}
