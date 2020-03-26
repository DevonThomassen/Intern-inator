import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    remember: new FormControl(true)
  });

  loading = false;
  hasError = false;

  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
  }

  afterClose(): void {
    this.hasError = false;
  }

  submitForm(): void {
    this.loading = true;
    const credentials = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };
    const r = this.loginForm.value.remember;
    this.auth.login(credentials, r).subscribe(
      () => {
        this.loading = false;
      },
      err => {
        this.loading = false;
        this.hasError = true;
        console.log(err);
      }
    );
  }

}
