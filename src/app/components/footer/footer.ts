import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'footer-component',
  imports: [TranslatePipe],
  templateUrl: './footer.html',
})
export class Footer {}
