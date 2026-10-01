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
    date: 'August 4',
    court: 'Court 1',
    time: '3 PM - 5 PM',
    total: 1050,
    status: 'upcoming'
  },
  {
    id: 'bk-1002',
    date: 'August 4',
    court: 'Court 1',
    time: '3 PM - 5 PM',
    total: 1050,
    status: 'upcoming'
  }
];

export const BOOKING_HISTORY: readonly UserBooking[] = [
  {
    id: 'bk-2001',
    date: 'August 1',
    court: 'Court 2',
    time: '1 PM - 3 PM',
    total: 1050,
    status: 'completed'
  },
  {
    id: 'bk-2002',
    date: 'July 28',
    court: 'Court 3',
    time: '10 AM - 12 PM',
    total: 1400,
    status: 'completed'
  }
];
