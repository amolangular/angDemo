import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit{

  // creating subject
  
  constructor(private auth:AuthService){

  }
  
  ngOnInit(): void {
    this.auth.subject$.subscribe((el:any)=>{
      console.log("Suppliers Component Subject " + el);
     });
    this.auth.subject$.next(1);
    this.auth.subject$.next(2);

  var obs = new Observable(observer =>{
     observer.next(1);
  })

  obs.subscribe((el:any)=>{
    console.log(el);
  })

  
  }

}
