import { UserBooking } from '../features/bookings/models/booking.model';

/**
 * Placeholder bookings for the My Bookings screen.
 *
 * Values are intentionally repetitive — they only exist to exercise the layout
 * and will be replaced by the bookings API response.
 */
export const UPCOMING_BOOKINGS: readonly UserBooking[] = [
  {
    id: 'bk-1001',
    date: 'August 3',
    time: '3PM - 4PM',
    court: 'Court 1',
    total: 350,
    status: 'upcoming'
  }
];

export const BOOKING_HISTORY: readonly UserBooking[] = [
  {
    id: 'bk-2001',
    date: 'August 1',
    time: '1PM - 3PM',
    court: 'Court 2',
    total: 1050,
    status: 'completed'
  },
  {
    id: 'bk-2002',
    date: 'July 28',
    time: '10AM - 12PM',
    court: 'Court 3',
    total: 1400,
    status: 'completed'
  }
];
