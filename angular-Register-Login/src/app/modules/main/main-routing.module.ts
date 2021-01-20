import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './components/main/main.component';
import {AllUsersComponent} from './components/allUsers/allUsers.component';


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'allusers', component: AllUsersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
