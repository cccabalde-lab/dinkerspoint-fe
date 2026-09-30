import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

/**
 * Google sign-in button. Presentational only — no OAuth flow is wired up yet,
 * so it deliberately does not submit anything.
 */
@Component({
  selector: 'app-google-button',
  templateUrl: './google-button.component.html',
  styleUrl: './google-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoogleButtonComponent {
  @Input() label = 'Continue with Google';
}
