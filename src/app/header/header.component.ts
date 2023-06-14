import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AsyncSubject, ReplaySubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  sub!: Subscription;

  counter: number = 0;
  constructor(private auth: AuthService) {
    //  this.counter = this.auth.cartCounter;
    this.sub = this.auth.subject$.subscribe((el: any) => {
      this.counter = el;
    })
  }


  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


  replaySub = new ReplaySubject();

  ngOnInit(): void {
    this.replaySub.next(10);
    this.replaySub.next(20);

    this.replaySub.subscribe((el: any) => {
      console.log("Replay Sub 1 " + el)
    })

    this.replaySub.next(30);

    this.replaySub.subscribe((el: any) => {
      console.log("Replay Sub 2 " + el)
    })
  }


}
