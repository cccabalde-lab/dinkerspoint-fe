import { Injectable, computed, signal } from '@angular/core';
import { AuthCredentials } from '../../features/auth/models/auth.models';

/**
 * Temporary stand-in for real authentication.
 *
 * The flag lives in memory only: it resets on reload, is shared by every tab
 * that loads the app, and is never sent anywhere. Replace the body of
 * `signIn`/`signOut` once the Node auth API lands — the rest of the UI only
 * depends on `isAuthenticated`.
 */
@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly authenticated = signal(false);
  private readonly currentUser = signal<string | null>(null);

  /** Whether the current visitor is treated as signed in. */
  readonly isAuthenticated = this.authenticated.asReadonly();

  /** Display name of the signed-in user, when there is one. */
  readonly user = this.currentUser.asReadonly();

  /** True when a visitor has a session and may reach account-only routes. */
  readonly canAccessAccount = computed(() => this.authenticated());

  /**
   * Mock sign-in: accepts any non-empty credentials and flips the local flag.
   * No credentials are verified and nothing is persisted.
   */
  signIn(credentials: AuthCredentials): void {
    this.currentUser.set(credentials.usernameOrEmail);
    this.authenticated.set(true);
  }

  /** Mock sign-up. Shares `signIn` because registration implies a session. */
  signUp(credentials: AuthCredentials): void {
    this.signIn(credentials);
  }

  signOut(): void {
    this.currentUser.set(null);
    this.authenticated.set(false);
  }
}
