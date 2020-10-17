import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';

import { User } from './user.model';

const ELEMENT_DATA: User[] = [
  {id: 1, ra: '285590', name: "Nicolas"},
  {id: 1, ra: '285590', name: "Saulo"},
  {id: 1, ra: '285591', name: "Nicolas"},
  {id: 3, ra: '285590', name: "Nicolas"},
  {id: 1, ra: '285590', name: "Nicolas"},
  {id: 1, ra: '285590', name: "Nicolas"}
];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  value: string;
  constructor(){}
  ngOnInit(){}
  displayedColumns: string[] = ['id', 'ra', 'name'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  selection = new SelectionModel<User>(true, []);

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

  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }
  /** The label for the checkbox on the passed row */
  // checkboxLabel(row?: User): string {
  //   if (!row) {
  //     return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
  //   }
  //   return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  // }

}
