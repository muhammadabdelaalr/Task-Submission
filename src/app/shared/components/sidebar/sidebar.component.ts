import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  sideNav = [
    {
      icon: 'fas fa-home',
      text: 'sidebar.home',
      link: 'home'
    },
    {
      icon: 'fas fa-user',
      text: 'sidebar.profile',
    }
  ]
}
