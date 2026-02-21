import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-data-table',
  imports: [TableModule, InputTextModule, ButtonModule, TagModule],
  templateUrl: './data-table.html',
  styleUrl: './data-table.scss',
})
export class DataTable implements OnInit {

  users: any[] = [];
  selectedUsers: any[] = [];

  ngOnInit() {
    this.users = [
      { id: 1, name: 'Karan', email: 'karan@mail.com', role: 'Admin', status: 'Active' },
      { id: 2, name: 'Rahul', email: 'rahul@mail.com', role: 'User', status: 'Inactive' },
      { id: 3, name: 'Amit', email: 'amit@mail.com', role: 'Manager', status: 'Active' },
      { id: 4, name: 'Neha', email: 'neha@mail.com', role: 'User', status: 'Active' },
      { id: 1, name: 'Karan', email: 'karan@mail.com', role: 'Admin', status: 'Active' },
      { id: 2, name: 'Rahul', email: 'rahul@mail.com', role: 'User', status: 'Inactive' },
      { id: 3, name: 'Amit', email: 'amit@mail.com', role: 'Manager', status: 'Active' },
      { id: 4, name: 'Neha', email: 'neha@mail.com', role: 'User', status: 'Active' },
      { id: 5, name: 'Priya', email: 'priya@mail.com', role: 'User', status: 'Inactive' }
    ];
  }
}
