import { BookingSchedule, BookingStatus, TimeSlot } from '../models/booking.model';

/** Build an hourly court schedule from 8 AM to 10 PM. Unlisted hours are available. */
function hourlySlots(overrides: Partial<Record<number, BookingStatus>>): readonly TimeSlot[] {
  return Array.from({ length: 15 }, (_, index) => {
    const hour = index + 8;
    const labelHour = hour % 12 || 12;
    const period = hour < 12 ? 'AM' : 'PM';

    return {
      label: `${labelHour} ${period}`,
      status: overrides[hour] ?? 'available'
    };
  });
}

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
      slots: hourlySlots({ 10: 'booked', 12: 'closed' })
    },
    {
      id: 'court-2',
      name: 'COURT 2',
      slots: hourlySlots({ 9: 'booked', 10: 'closed' })
    },
    {
      id: 'court-3',
      name: 'COURT 3',
      slots: hourlySlots({ 11: 'closed', 12: 'booked' })
    }
  ]
};
