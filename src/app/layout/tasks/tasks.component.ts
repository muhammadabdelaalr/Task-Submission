import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.isUserLogin();
  }
  isUserLogin() {
    if (!this.authService.isUserLogin()) this.router.navigate(['/login']);
  }
}
