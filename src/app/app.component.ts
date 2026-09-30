import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteFooterComponent } from './shared/components/site-footer/site-footer.component';
import { SiteHeaderComponent } from './shared/components/site-header/site-header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SiteFooterComponent, SiteHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dinkerspoint-fe';
}
