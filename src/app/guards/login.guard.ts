import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Storage } from "@ionic/storage";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private storage: Storage, private router: Router) {}
  async canActivate() {
    const isUserLoggedIn = await this.storage.get('isUserLoggedIn');
    if (isUserLoggedIn){
      return true;
    }else {
      this.router.navigateByUrl("/login");
    }
  }
}