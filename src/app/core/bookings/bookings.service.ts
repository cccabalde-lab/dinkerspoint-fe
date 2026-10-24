import { Injectable, signal } from '@angular/core';
import { BOOKING_HISTORY, UPCOMING_BOOKINGS } from '../../data/bookings.mock';
import { UserBooking } from '../../features/bookings/models/booking.model';

/**
 * Single source of the signed-in user's bookings.
 *
 * This is the seam where the Node bookings API will land: swap the seeded
 * signals for an HTTP call and expose the result through the same signals, and
 * every component above stays untouched.
 */
@Injectable({ providedIn: 'root' })
export class BookingsService {
  // TODO: replace with an HTTP request once the bookings API exists.
  private readonly upcoming = signal<readonly UserBooking[]>(UPCOMING_BOOKINGS);
  private readonly history = signal<readonly UserBooking[]>(BOOKING_HISTORY);

  readonly upcomingBookings = this.upcoming.asReadonly();
  readonly bookingHistory = this.history.asReadonly();

  /** Looks a booking up by id, for the details route. */
  findById(id: string): UserBooking | undefined {
    return [...this.upcoming(), ...this.history()].find((booking) => booking.id === id);
  }
}
