import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { UserService } from './../services/user.service';
import { UserComponent } from './_modal/user.component';
import { User } from './user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  value: string;
  displayedColumns: string[] = ['select', 'id', 'ra', 'name'];
  dataSource;
  selection = new SelectionModel<User>(true, []);

  constructor(
    private matDialog: MatDialog,
    private userService:UserService
  ){
    this.userService.getUser().subscribe(
      (rs: User[]) => {
        this.dataSource = new MatTableDataSource(rs);
      }
    )
  }
  ngOnInit(){}
  
  //Aplica filtro
  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: User): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id_usuario + 1}`;
  }

  openModalEditUser(){
    const selected = this.selection.selected;
    if(selected.length < 1){
      //Precisa de pelo menos um usuario selecionado
      alert("Selecione um usuário para entrar na edição.");
      return null;
    }else if(selected.length > 1){
      //Só pode editar 1 item por vez
      alert("Não é possível editar mais de um usuário por vez");
      return null;
    }
    //Entra no modal de edição
    const userModal = this.matDialog.open(UserComponent, {
      width: '700px',
      data: {title: "New User", user: selected[0]}
    });
    userModal.afterClosed().subscribe(
      data => {
        this.selection.clear();
      }
    );
  } 

  openModalNewUser(){
    const userModal = this.matDialog.open(UserComponent, {
      width: '700px',
      data: {title: "New User"}
    });
    userModal.afterClosed().subscribe(
      data => {
        if(data.user){
          this.dataSource.data.push(data.user);
          this.dataSource._updateChangeSubscription();
        }
      }
    );
  }
}
