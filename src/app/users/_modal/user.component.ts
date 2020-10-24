import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from './../user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;
  name: string;
  @Output() userEvent = new EventEmitter<User>();

  constructor(
    private dialogRef: MatDialogRef<UserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){}

  ngOnInit(): void {
    if(this.data.user){
      this.user = this.data.user;
      this.name = this.data.user.name;
    } else {
      this.user = new User();
    }
  }

  close(){
    this.data.user.name = this.name;
    this.dialogRef.close({status: "closed"});
  }

  save(){
    let status = "update";
    if(!this.user.id){
      //Por enquanto não vai bater na API
      this.user.id = 1;
      this.user.ra = '285590';
      status = "new";
    }
    let data = {
      status: status,
      user: this.user
    };
    this.dialogRef.close(data);
  }
}
