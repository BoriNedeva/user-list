import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  readonly usersEndpoint = "/users-api";

  constructor(private readonly http: HttpClient) {}

  getUsers(): User[] {
    // real code to call the corresponding http.get method and to return observable
    return [
      {
        id: '22f8141a-84ee-4f2f-acdf-f3cb7b92eacd',
        name: 'Ivan Ivanov',
        email: "ivan.ivanov@corp.com",
        phone: "0888123456"
      },
      {
        id: 'cddad441-9fb4-4677-b771-b1ea724d2bf7',
        name: 'Ivan Ivanov 2',
        email: "ivan.ivanov2@corp.com",
        phone: "0888123451"
      },
      {
        id: '02825186-47fc-49eb-9600-97c19fb5a5b7',
        name: 'Ivan Ivanov 3',
        email: "ivan.ivanov3@corp.com",
        phone: "0888123452"
      },
      {
        id: 'fd6a270c-d16b-4388-85dd-ccdf2d290ad5',
        name: 'Ivan Ivanov 4',
        email: "ivan.ivanov4@corp.com",
        phone: "0888123454"
      }
    ]
  }

  createUser(user: User) {
    // real code to call the corresponding http.post method with user payload and to return observable
    // this.http.post(this.usersEndpoint, user);
    console.log("Created user ", user);
  }

  deleteUser(id: string) {
    // real code to call the corresponding http.delete method with user id and to return observable
    // this.http.delete(`${this.usersEndpoint}/${id}`);
    console.log("Deleted user with Id ", id);
  }

  updateUser(id: string, user: User) {
    // real code to call the corresponding http.put method with user payload and to return observable
    // this.http.put(`${this.usersEndpoint}/${id}`);
    console.log("Updated user ", user);
  }
}
