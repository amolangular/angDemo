import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class CanAccessGuard implements CanActivate,CanLoad {
  constructor(private auth:AuthService){

  }
  
  canLoad(route: Route, segments: UrlSegment[]): boolean  {
    if(this.auth.isLoggedIn()){
       return true ;
    }else {
     return false;
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
       
      if(this.auth.isLoggedIn()){
        return true ;
      }  else {
        return false;
      }
  }
  
}
