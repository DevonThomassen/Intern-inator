import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    // remember: new FormControl(true)
  });

  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
  }

  submitForm(): void {
    console.log(this.loginForm.value);
    this.auth.login(this.loginForm.value);
  }

}
