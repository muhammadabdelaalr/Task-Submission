import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  sideNav = [
    {
      icon: 'dashboard',
      text: 'sidebar.dashboard',
      link: 'dashboard'
    },
    {
      icon: 'folder_open',
      text: 'sidebar.projects',
      link: 'projects'
    },
    {
      icon: 'list',
      text: 'sidebar.tasks',
      link: 'tasks'
    },
    {
      icon: 'event_note',
      text: 'sidebar.calendar',
      link: 'calendar'
    }
  ]

  constructor(private router: Router) {}

  logoutFn() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
