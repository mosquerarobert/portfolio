import { Component, inject, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { LangService } from '../../services/lang.service';

@Component({
  selector: 'header-component',
  imports: [TranslatePipe],
  templateUrl: './header.html',
})
export class HeaderComponent {
  private langService = inject(LangService);
  private clicks = 0;
  private lastClick = 0;
  private readonly ms_gap = 600;
  animating = signal<boolean>(false);
  animated = signal<boolean>(false);
  lang = signal<string>(this.langService.lang());

  handleClick() {
    const flag = document.getElementById('flag');
    const now = Date.now();

    if (now - this.lastClick > this.ms_gap) {
      this.clicks = 0;
    }

    this.clicks++;
    this.lastClick = now;

    if (this.clicks === 3) {
      flag?.classList.add('animate__rotateOutDownLeft');
      this.clicks = 0;
    }
  }

  playAnimation() {
    if (this.animating()) return;
    this.animating.set(true);
  }

  onAnimationEnd() {
    this.animated.set(true);
    const flag = document.getElementById('flag');
    flag?.classList.remove('animate__rotateOutDownLeft');
    flag?.classList.add('opacity-0');
    this.animating.set(false);
  }
}
