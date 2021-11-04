import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private storage: Storage) { }

  loginUser(credentials){
    return new Promise((accept, reject) => {
      if (credentials.email == "test@test.com" && credentials.password == "12345") {
        accept("Login correcto");
      }else {
        reject("Login incorrecto");
      }
    });
  }

  registerUser(userData){
    return this.storage.set("userData", userData);
  }
}
