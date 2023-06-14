import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 // subject$ = new Subject();

 subject$ = new BehaviorSubject<number>(5);

  obs$ = this.subject$.asObservable();
  // cartCounter:number=0;
   
  


  constructor() { }

  isLoggedIn(){

    //business logic
    return false ;

  }

  incrementCounter(num:number){
    this.subject$.next(num);
  }
}
