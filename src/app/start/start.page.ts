import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from  '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.css']
})
export class StartPage {

  loginForm = true;
  loading: boolean = false;

  loginSignupForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService:  AuthService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  changeForm() {
    this.loginForm = !this.loginForm
  }

  onSubmit() {
    this.loading = true;

    if (this.loginForm) {
      this.authService.login(this.loginSignupForm.value.email, this.loginSignupForm.value.password)
      .then(() => {
        this.loading = false;
      }).catch((err) => {
        this.loading = false
      });
    } else if (this.loginSignupForm.value.password == this.loginSignupForm.value.confirmPassword) {
      this.authService.signUp(this.loginSignupForm.value.email, this.loginSignupForm.value.password)
      .then(() => {
        this.loading = false;
        this._snackBar.open("Cadastro realizado", "Ok", { duration: 2000 });
      }).catch((err) => {
        this.loading = false
      });
    } else {
      this.loading = false
      
      this._snackBar.open("As senhas devem ser iguais", "Ok", { duration: 2000 });
    }
  }

}
