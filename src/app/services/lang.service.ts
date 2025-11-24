import { inject, Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LangService {
  private translate = inject(TranslateService);
  lang = signal<string>('es');

  constructor() {
    this.translate.addLangs(['es', 'en']);
    this.translate.setFallbackLang('es');
  }

  setLang(lang: string) {
    this.lang.set(lang);
    this.translate.use(lang);
  }
}
