import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersService } from '../../services/users-service.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  data = inject(MAT_DIALOG_DATA);
  isUpdate = false;
  title = '';

  userForm: FormGroup;

  constructor(private readonly fb: FormBuilder, private readonly usersService: UsersService,) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });
  }

  ngOnInit() {
    if (this.data?.user) {
     this.userForm.setValue({
      name: this.data.user.name,
      email: this.data.user.email,
      phone: this.data.user.phone
     })

     this.isUpdate = true;
     this.title = 'Update user';
    } else {
      this.title = 'Add user';
    }
  }

  saveUser() {
    if (this.userForm.valid) {
      if (this.isUpdate) {
        this.usersService.updateUser(this.data.user.id, this.userForm.value)
      } else {
        this.usersService.createUser(this.userForm.value);
      }

      this.userForm.clearValidators();
    } else {
      console.log("invalid")
      // real code would be to have validation messages in the template that are shown on value change and save
    }
  }
}
