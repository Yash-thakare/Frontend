import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable(
  {
    providedIn:'root'
  }
)

export class logingaurdGuard implements CanActivate{

  constructor(public rtr : Router){}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(localStorage.getItem("uname")==null){
      alert("Please login/register")
      this.rtr.navigate(["login"])
      return false;
    } else{
      return true;

    }
  }
};
