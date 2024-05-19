import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../auth.service';
import Swal from 'sweetalert2';

type AlertType = { type: string; msg: string; timeout: number };

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  alerts: AlertType[] = [];
  alert: AlertType = {type: '', msg: '', timeout: 0};
  showAlert: boolean = false;
  hide = true;

  constructor(private auth: AuthService, private router: Router, private translate: TranslateService) {}

  loginForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  login() {
    this.auth.login(this.loginForm.value).subscribe({
      next: (res) => {
        sessionStorage.setItem('userName', res.userName);
        Swal.fire({
          icon: 'success',
          title: this.translate.instant('alert.loggedInSuccessfully'),
          showConfirmButton: false,
          timer: 600
        })
        this.router.navigate(['/']);
      },
      error: (err) => {
      },
    })
  }

  isUserLogin() {
    if (this.auth.isAuthenticated()) this.router.navigate(['/']);
  }

  ngOnInit(): void {
    this.isUserLogin();
  }
}
