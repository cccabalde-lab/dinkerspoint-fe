import { BookingSchedule } from '../models/booking.model';

/** Months offered by the mock month selector, in calendar order. */
export const MONTHS: readonly string[] = [
  'June',
  'July',
  'August',
  'September',
  'October',
  'November'
];

/** Year the mock schedule belongs to. */
export const SCHEDULE_YEAR = 2026;

/**
 * Static schedule used by the landing page until the booking API exists.
 * Deliberately mixes every status so the legend colours are all exercised.
 */
export const BOOKING_SCHEDULE: BookingSchedule = {
  month: 'August',
  courts: [
    {
      id: 'court-1',
      name: 'COURT 1',
      slots: [
        { label: '9 AM', status: 'available' },
        { label: '10 AM', status: 'booked' },
        { label: '11 AM', status: 'available' },
        { label: '12 PM', status: 'closed' }
      ]
    },
    {
      id: 'court-2',
      name: 'COURT 2',
      slots: [
        { label: '9 AM', status: 'booked' },
        { label: '10 AM', status: 'closed' },
        { label: '11 AM', status: 'available' },
        { label: '12 PM', status: 'available' }
      ]
    },
    {
      id: 'court-3',
      name: 'COURT 3',
      slots: [
        { label: '9 AM', status: 'available' },
        { label: '10 AM', status: 'available' },
        { label: '11 AM', status: 'closed' },
        { label: '12 PM', status: 'booked' }
      ]
    }
  ]
};
