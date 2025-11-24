import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'experience-component',
  imports: [TranslatePipe],
  templateUrl: './experience.html',
})
export class Experience {
  translateService = inject<TranslateService>(TranslateService);
}
