import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

/**
 * Sign in / Sign up switch. The active tab is driven by the current route, so
 * the two pages cannot disagree about which one is selected.
 */
@Component({
  selector: 'app-auth-tabs',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './auth-tabs.component.html',
  styleUrl: './auth-tabs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthTabsComponent {}
