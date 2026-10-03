import { ChangeDetectionStrategy, Component } from '@angular/core';

/** Dinkerspoint's Facebook page. */
const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61594426880913';

@Component({
  selector: 'app-site-footer',
  templateUrl: './site-footer.component.html',
  styleUrl: './site-footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SiteFooterComponent {
  protected readonly facebookUrl = FACEBOOK_URL;
  protected readonly year = new Date().getFullYear();

  /**
   * Contact address is not settled yet, so the Gmail icon renders as an
   * inert placeholder rather than a dead or invented `mailto:` link.
   * TODO: set this to the business address to make the icon a real link.
   */
  protected readonly contactEmail: string | null = null;
}
