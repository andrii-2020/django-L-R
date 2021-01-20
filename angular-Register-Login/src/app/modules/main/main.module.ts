import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {UserService} from './services';
import { MainComponent } from './components/main/main.component';
import { AllUsersComponent } from './components/allUsers/allUsers.component';


@NgModule({
  declarations: [MainComponent, AllUsersComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [UserService]
})
export class MainModule { }
