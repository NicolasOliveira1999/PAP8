import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated: boolean = (localStorage.getItem("logedIn") == "true") || false;
  showMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router){}

  logar(user: User){
    if(user.matricula == "123123" && user.password == "123456"){
      this.isAuthenticated = true;
      this.emitteShowMenuEmitter();
      localStorage.setItem("logedIn", "true");
      this.router.navigate(["/"]);
    } else {
      this.isAuthenticated = false;
      this.showMenuEmitter.emit(false);
    }
  }

  isUserLoged():boolean{
    return this.isAuthenticated; 
  }

  emitteShowMenuEmitter(){
    if(this.isAuthenticated){
      this.showMenuEmitter.emit(true);
    }
  }
}
