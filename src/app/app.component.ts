import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HomeComponent } from './gifs/pages/home/home.component';

const ANGULAR_IMPORTS = [RouterOutlet, SidebarComponent, HomeComponent];

@Component({

  selector: 'app-root',
  standalone: true,
  imports: [ANGULAR_IMPORTS],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bases-fernando';
}
