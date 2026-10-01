import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Dinkerspoint',
    loadComponent: () =>
      import('./features/landing/landing-page.component').then(
        (m) => m.LandingPageComponent
      )
  },
  {
    path: 'login',
    title: 'Sign in · Dinkerspoint',
    loadComponent: () =>
      import('./features/auth/sign-in/sign-in.component').then((m) => m.SignInComponent)
  },
  {
    path: 'signup',
    title: 'Sign up · Dinkerspoint',
    loadComponent: () =>
      import('./features/auth/sign-up/sign-up.component').then((m) => m.SignUpComponent)
  },
  {
    path: 'bookings',
    title: 'My bookings · Dinkerspoint',
    loadComponent: () =>
      import('./features/bookings/bookings-page/bookings-page.component').then(
        (m) => m.BookingsPageComponent
      )
  },
  {
    // Placeholder until a real booking-details feature lands.
    path: 'bookings/:id',
    title: 'Booking details · Dinkerspoint',
    loadComponent: () =>
      import('./features/bookings/booking-details/booking-details.component').then(
        (m) => m.BookingDetailsComponent
      )
  },
  // Maps ships in its own feature branch. Until then the header link still
  // resolves instead of throwing, and lands back on the home page.
  { path: '**', redirectTo: '' }
];
