import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  showMenu = true;
  isReadOnly = 0;
  rememberMe = true;

  constructor(private router: Router) { }

  tokenData = {};

  private token ='';
  userId: any;
  userType: any;

  public getToken(): string {
    return  this.token;
  }

  // @ts-ignore
  public isAuthenticated(): boolean {

    if (this.token && this.token !== '') {
      return true;
    } else {
      // this.token = localStorage.getItem('auth_token');
      if (this.token && this.token !== '') {
        const tokenParsed = (JSON.parse(atob(this.token.split('.')[1])));
        try {
          this.tokenData = tokenParsed.identity;
          this.userId = tokenParsed.identity.id;
          this.userType = tokenParsed.identity.type;
          if (tokenParsed.identity.hasOwnProperty('read_only')) {
            this.isReadOnly = tokenParsed.identity.read_only;
          }
        } catch (e) {}
        const expiry = tokenParsed.exp;
        const current = Math.floor((new Date()).getTime() / 1000);
        return current <= expiry;
      }
    }

  }

  public saveTokenToLocalStorage(token: string, route?: string): void {

    this.token = token;
    if (this.rememberMe) {
      localStorage.setItem('auth_token', this.token);
    }
    try {
      const tokenParsed = (JSON.parse(atob(this.token.split('.')[1])));
      try {
        this.tokenData = tokenParsed.identity;
        this.userId = tokenParsed.identity.id;
        this.userType = tokenParsed.identity.type;
        if (tokenParsed.identity.hasOwnProperty('read_only')) {
          this.isReadOnly = tokenParsed.identity.read_only;
        }
      } catch (e) {}
    } catch (e) {}
    if (route) {
      this.router.navigateByUrl(route).then();
    } else {
      if (this.userType === 'admin'){
        this.router.navigateByUrl('app/admin/manage').then();
      } else{
        this.router.navigateByUrl('app/home').then();
      }
    }
  }

  public logout(tabClosed?: any): void {
    if (tabClosed && this.rememberMe) {
      return;
    }
    // delete this.token;
    localStorage.removeItem('auth_token');
    localStorage.removeItem('parent_token');
    if (! tabClosed) {
      this.router.navigate(['auth/login']).then();
      location.reload();
    }
  }
  public childLogout(): void {
    // delete this.token;
    // this.token = localStorage.getItem('parent_token');
    if (this.rememberMe) {
      localStorage.setItem('auth_token', this.token);
    }
    localStorage.removeItem('parent_token');
    this.router.navigate(['app']).then();
    location.reload();
  }


}
