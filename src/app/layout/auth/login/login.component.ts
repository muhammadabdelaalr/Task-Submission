import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../auth.service';

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
        this.alert = {
          type: 'success',
          msg: this.translate.instant('alert.logged-in-successfully'),
          timeout: 500
        };
        // this.alerts.push({
        //   type: 'success',
        //   msg: this.translate.instant('alert.logged-in-successfully'),
        //   timeout: 500
        // })
        this.router.navigate(['/']);
      },
      error: (err) => {
      },
    })
  }

  onClosed(dismissedAlert: AlertType): void {
    this.alerts = this.alerts.filter((alert) => alert !== dismissedAlert);
  }

  isUserLogin() {
    if (this.auth.isUserLogin()) this.router.navigate(['/']);
  }

  ngOnInit(): void {
    this.isUserLogin();
  }
}
