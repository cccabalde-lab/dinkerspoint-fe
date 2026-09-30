import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavLink {
  readonly label: string;
  readonly path: string;
}

@Component({
  selector: 'app-site-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SiteHeaderComponent {
  protected readonly links: readonly NavLink[] = [
    { label: 'Home', path: '/' },
    { label: 'Maps', path: '/maps' },
    { label: 'Bookings', path: '/bookings' }
  ];
}
