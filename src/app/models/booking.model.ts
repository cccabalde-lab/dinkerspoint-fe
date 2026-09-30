/** Availability state of a single time slot on a court. */
export type BookingStatus = 'available' | 'booked' | 'closed' | 'selected';

/** A bookable time range on a court, e.g. `9 AM`. */
export interface TimeSlot {
  readonly label: string;
  readonly status: BookingStatus;
}

/** One of the venue courts, e.g. `COURT 1`. */
export interface Court {
  readonly id: string;
  readonly name: string;
  readonly slots: readonly TimeSlot[];
}

/** The full mock schedule rendered by the booking section. */
export interface BookingSchedule {
  readonly month: string;
  readonly courts: readonly Court[];
}

/** The slot the user has picked in the UI. */
export interface SlotSelection {
  readonly courtId: string;
  readonly slotLabel: string;
}

/** A single cell of the month grid, including muted spill-over days. */
export interface CalendarDay {
  readonly key: string;
  readonly day: number;
  readonly muted: boolean;
}

/** A row of seven days in the month grid. */
export type CalendarWeek = readonly CalendarDay[];
