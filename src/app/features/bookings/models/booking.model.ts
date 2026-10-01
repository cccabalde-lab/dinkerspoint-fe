/** Whether a booking is still ahead of the user or already completed. */
export type UserBookingStatus = 'upcoming' | 'completed';

/**
 * One booking in the signed-in user's list.
 *
 * Shaped so a future API response can map straight onto it: the fields are
 * display-ready strings rather than a raw court/slot relationship.
 */
export interface UserBooking {
  readonly id: string;
  /** Display date, e.g. `August 4`. */
  readonly date: string;
  /** Court label, e.g. `Court 1`. */
  readonly court: string;
  /** Time range, e.g. `3 PM - 5 PM`. */
  readonly time: string;
  /** Amount in pesos, e.g. `1050`. */
  readonly total: number;
  readonly status: UserBookingStatus;
}
