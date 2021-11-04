import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../services/authenticate.service';
import { NavController } from '@ionic/angular';
import { Storage } from "@ionic/storage";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;
  validationMessage = {
    email: [
      { type: "required", message: "El email es requerido" },
      { type: "pattern", message: "Email invalido"}
    ],
    password: [
      { type: "required", message: "El password es requerido" },
      { type: "minlength", message: "Minimo 5 letras para el password" }
    ],
    name: [
      { type: "required", message: "El nombre es requerido" },
      { type: "minlength", message: "El nombre debe tener 5 letras como minimo"}
    ],
    lastname: [
      { type: "required", message: "El apellido es requerido" },
      { type: "minlength", message: "El apellido debe tener 3 letras como minimo" }
    ],
  };
  errorMessage:string = "";

  constructor(
    private formBuider: FormBuilder,
    private authService: AuthenticateService,
    private navCtrl: NavController,
    private storage: Storage
    ) {
    this.registerForm = this.formBuider.group({
      email: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
      ])),
      password: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])),
      name: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])),
      lastname: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ]))
    });
  }

  ngOnInit() {
  }

  register(userData){
    console.log(userData);
    this.authService.registerUser(userData).then(() => {
      this.navCtrl.navigateBack("/login")
    })
  }

  goToLogin(){
    this.navCtrl.navigateBack("/login");
  }
}
