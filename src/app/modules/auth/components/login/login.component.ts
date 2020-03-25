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
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    // remember: new FormControl(true)
  });

  loading = false;
  hasError = false;

  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
  }

  submitForm(): void {
    this.loading = true;
    console.log(this.loginForm.value);
    this.auth.login(this.loginForm.value).subscribe(
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
