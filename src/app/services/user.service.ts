import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './../users/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient){}
  
  getUser(){
    return this.http.get("http://localhost:8000/Usuario/");
  }

  registerUser(user: User){
    return this.http.post<User>("http://localhost:8000/Usuario/", user);
  }
}
