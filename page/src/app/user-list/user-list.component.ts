import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public users: any;

  constructor(private userSvc: UsersService) {
    this.userSvc.ShowUsers().subscribe(res=>{
      this.users = res;
    });
  }

  ngOnInit(): void {

  }
}
