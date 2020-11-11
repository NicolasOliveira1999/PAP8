import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from './../user.model';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;
  nome: string;
  @Output() userEvent = new EventEmitter<User>();

  constructor(
    private dialogRef: MatDialogRef<UserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UserService
  ){}

  ngOnInit(): void {
    if(this.data.user){
      this.user = this.data.user;
      this.nome = this.data.user.nome;
    } else {
      this.user = new User();
    }
  }

  close(){
    if(this.data.user){
      this.data.user.name = this.nome;
    }
    this.dialogRef.close({status: "closed"});
  }

  save(){
    //let status = "update";
    if(!this.user.id_usuario){
      //Por enquanto não vai bater na API
      this.user.ra = '285590';
      this.user.senha = '000000';
      this.user.situacao = 'OK';
      this.user.admin_acess = false;
      
      this.userService.registerUser(this.user).subscribe(r => {
        this.user = r;
        let data = {
          status: "new",
          user: this.user
        };
        this.dialogRef.close(data);
      });
    }
  }
}
