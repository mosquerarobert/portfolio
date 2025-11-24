import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'projects-component',
  imports: [TranslatePipe],
  templateUrl: './projects.html',
})
export class Projects {}
