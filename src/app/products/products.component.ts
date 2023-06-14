import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  counter:number = 0;
   constructor(private auth:AuthService,private router:Router){
    this.router.events.subscribe((el:any)=>{
      console.log(el);
      if(el instanceof NavigationStart){
        console.log("Navigation Start")
      }else if(el  instanceof NavigationEnd){
       console.log("Navigation End");
      }
    })
   }

  ngOnInit(): void {
    this.auth.obs$.subscribe((el:any)=>{
      console.log("Product Component Subject " + el);
    })
  }


  incrementCounter(){
    ++this.counter
   this.auth.incrementCounter(this.counter);
   // console.log(this.auth.cartCounter);
  }
}
