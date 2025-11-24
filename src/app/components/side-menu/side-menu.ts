import { Component, inject, signal } from '@angular/core';
import { LangService } from '../../services/lang.service';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'side-menu-component',
  imports: [TranslatePipe],
  templateUrl: './side-menu.html',
})
export class SideMenu {
  private langService = inject(LangService);
  open = signal<boolean>(false);
  isDark = signal<boolean>(true);
  currentLang = signal<string>(this.langService.lang());

  setLanguage(lang: string) {
    this.langService.setLang(lang);
    this.currentLang.set(lang);
  }

  DarkModeOn() {
    const html = document.documentElement;
    if (!html.classList.contains('dark')) {
      html.classList.add('dark');
    }
    this.isDark.set(true);
    localStorage.setItem('dark', 'true');
  }
  DarkModeOff() {
    const html = document.documentElement;
    html.classList.remove('dark');
    this.isDark.set(false);
    localStorage.removeItem('dark');
  }

  openMenu() {
    this.open.set(true);
    const nav = document.getElementById('nav');
    nav?.classList.remove('animate__slideInLeft', 'animate__animated');
    if (this.open()) void nav?.offsetWidth;
    nav?.classList.add('animate__slideInLeft', 'animate__animated');
  }
  closeMenu() {
    this.open.set(false);
  }
}
