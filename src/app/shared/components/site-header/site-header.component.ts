import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../core/auth/auth.service';

interface NavLink {
  readonly label: string;
  readonly path: string;
  readonly exact?: boolean;
}

@Component({
  selector: 'app-site-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SiteHeaderComponent {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  protected readonly links: readonly NavLink[] = [
    { label: 'Home', path: '/', exact: true },
    { label: 'Maps', path: '/maps' },
    { label: 'Bookings', path: '/bookings' }
  ];

  protected readonly isAuthenticated = this.auth.isAuthenticated;
  protected readonly menuOpen = signal(false);

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  /**
   * Signed-out visitors are sent to sign in. Signed-in visitors stay put until
   * the account/dashboard page exists.
   */
  protected onAccountClick(): void {
    this.closeMenu();
    if (this.isAuthenticated()) {
      // TODO: route to the account/dashboard page once it is implemented.
      return;
    }

    void this.router.navigate(['/login']);
  }
}
