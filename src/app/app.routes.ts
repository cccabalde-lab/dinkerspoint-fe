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
  // Maps and Bookings ship in their own feature branches. Until then the header
  // links still resolve instead of throwing, and land back on the home page.
  { path: '**', redirectTo: '' }
];
