import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  ngOnInit(): void {
    alert('hello world');
  }




  constructor(){
    console.log("constructor is getting excuted");
    
  }
}
