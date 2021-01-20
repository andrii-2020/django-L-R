import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services';
import {IUser} from '../../interfaces';

@Component({
  selector: 'app-allUsers',
  templateUrl: './allUsers.component.html',
  styleUrls: ['./allUsers.component.css']
})
export class AllUsersComponent implements OnInit {
  users: IUser[];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(val => this.users = val);
  }

}
