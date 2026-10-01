import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../core/auth/auth.service';

interface NavLink {
  readonly label: string;
  readonly path: string;
  /** Whether only the exact path counts as active. Defaults to true. */
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
    { label: 'Home', path: '/' },
    { label: 'Maps', path: '/maps' },
    { label: 'My Bookings', path: '/bookings', exact: false }
  ];

  protected readonly isAuthenticated = this.auth.isAuthenticated;

  /**
   * Signed-out visitors are sent to sign in. Signed-in visitors stay put until
   * the account/dashboard page exists.
   */
  protected onAccountClick(): void {
    if (this.isAuthenticated()) {
      // TODO: route to the account/dashboard page once it is implemented.
      return;
    }

    void this.router.navigate(['/login']);
  }
}
