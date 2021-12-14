import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  public setRoles(roles:[]) {
    localStorage.setItem("roles", JSON.stringify(roles));
  }

  public getRoles() : [] {
    //return roles array
    return JSON.parse(<string>localStorage.getItem("roles"));
  }

  public setToken(jwtToken : string) {
    localStorage.setItem("jwtItem", jwtToken);
  }

  public getToken(){
    return <string>localStorage.getItem("jwtToken");
  }

  public clear() {
    localStorage.clear();
  }

  public isLoggedIn() {
     return this.getRoles() && this.getToken();
  }
}