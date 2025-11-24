import { Component, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { SideMenu } from './components/side-menu/side-menu';
import { Experience } from './components/experience/experience';
import { Projects } from './components/projects/projects';
import { Footer } from './components/footer/footer';
import { Github } from './components/github/github';
import { LangService } from './services/lang.service';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, SideMenu, Experience, Projects, Footer, Github],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'portfolio';
  dark = signal<boolean>(false);
}
