import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth-guard';

import { LampadasComponent } from './lampadas/lampadas.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: "users", component: UsersComponent, canActivate: [AuthGuard]},
  {path: "lampadas", component: LampadasComponent, canActivate: [AuthGuard]},
  {path: "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
