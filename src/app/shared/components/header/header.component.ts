import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TasksService } from '../../core/services/tasks.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  avatar = './assets/images/avatar.jpg';
  userName: any;
  search: any = null;

  constructor(private tasksService: TasksService, @Inject(DOCUMENT) private document: Document, private translate: TranslateService) {
    this.getUserName();
  }

  setSearing() {
    this.tasksService.search.next(this.search);
  }


  getUserName() {
    this.userName = sessionStorage.getItem('userName');
  }

  get currentLang() {
    return this.translate.currentLang;
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('currentLang', lang);
    if (lang == 'en') {
      // location.reload();
      this.document.getElementsByTagName('html')[0].lang = 'en';
      this.document.getElementsByTagName('html')[0].dir = 'ltr';
      this.document.getElementById('AppContainer')?.classList.remove('is-rtl');
    } else {
      this.document.getElementsByTagName('html')[0].lang = 'ar';
      this.document.getElementsByTagName('html')[0].dir = 'rtl';
      this.document.getElementById('AppContainer')?.classList.add('is-rtl');
    }
  }
}
