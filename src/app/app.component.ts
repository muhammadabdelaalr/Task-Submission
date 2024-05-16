import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './layout/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  textDir: any;
  lang: string = 'en';
  currentLang: any;

  constructor(private auth: AuthService, private translate: TranslateService,
    @Inject(DOCUMENT) private document: Document) {
    translate.addLangs(['en', 'ar']);
  }

  switchLanguage(lang: string) {
    if (lang === 'en') {
      this.textDir = 'ltr';
    } else {
      this.textDir = 'rtl';
    }
    this.translate.use(lang);
  }

  ngOnInit() {
    //Change Lang:
    this.currentLang = localStorage.getItem('currentLang') || 'en';
    this.translate.use(this.currentLang);
    if (this.currentLang == "en") {
      this.document.getElementsByTagName('html')[0].lang = 'en';
      this.document.getElementsByTagName('html')[0].dir = 'ltr';
      this.document.getElementById('AppContainer')?.classList.remove('is-rtl');

    } else if (this.currentLang == "ar") {
      this.document.getElementsByTagName('html')[0].lang = 'ar';
      this.document.getElementsByTagName('html')[0].dir = 'rtl';
      this.document.getElementById('AppContainer')?.classList.add('is-rtl');
    }
  }

  get isUserLogin() {
    return this.auth.isUserLogin();
  }
}
