import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * Centres the authentication card between the site header and the viewport
 * edges. Both auth pages project their own content into the card.
 */
@Component({
  selector: 'app-auth-shell',
  templateUrl: './auth-shell.component.html',
  styleUrl: './auth-shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthShellComponent {}
