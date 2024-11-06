import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

import { UsersTableComponent } from './components/users-table/users-table.component';
import { UsersService } from './services/users-service.service';
import { UsersListRoutingModule } from './users-list-routing.module';
import { UserFormComponent } from './components/user-form/user-form.component';



@NgModule({
  declarations: [
    UsersTableComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    MatTableModule,
    UsersListRoutingModule
  ],
  providers: [
    UsersService
  ]
})
export class UsersListModule { }
