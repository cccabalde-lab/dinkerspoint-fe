import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { MONTHS, SCHEDULE_YEAR } from '../../../data/booking-schedule.mock';
import { CalendarDay, CalendarWeek } from '../../../models/booking.model';

/** Weekday initials, Sunday first, matching the month grid columns. */
const WEEKDAYS: readonly string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const DEFAULT_MONTH = 'August';

@Component({
  selector: 'app-month-selector',
  templateUrl: './month-selector.component.html',
  styleUrl: './month-selector.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MonthSelectorComponent {
  protected readonly months = MONTHS;
  protected readonly weekdays = WEEKDAYS;
  protected readonly selectedMonth = signal(DEFAULT_MONTH);
  protected readonly SCHEDULE_YEAR_LABEL = SCHEDULE_YEAR;

  /** Days of the selected month, padded to whole weeks with muted spill-over. */
  protected readonly weeks = computed<CalendarWeek[]>(() =>
    chunk(buildMonth(this.selectedMonth(), SCHEDULE_YEAR), 7)
  );

  protected onMonthChange(event: Event): void {
    this.selectedMonth.set((event.target as HTMLSelectElement).value);
  }
}

/** Builds a leading-blank, day-filled, trailing-padded list of calendar days. */
function buildMonth(monthName: string, year: number): CalendarDay[] {
  const monthIndex = Math.max(0, MONTHS.indexOf(monthName));
  const daysInMonth = daysIn(year, monthIndex);
  const daysInPrevMonth = daysIn(year, monthIndex - 1);
  const leadingBlanks = new Date(year, monthIndex, 1).getDay();

  const days: CalendarDay[] = [];

  for (let offset = leadingBlanks - 1; offset >= 0; offset--) {
    days.push({ key: `prev-${offset}`, day: daysInPrevMonth - offset, muted: true });
  }

  for (let day = 1; day <= daysInMonth; day++) {
    days.push({ key: `cur-${day}`, day, muted: false });
  }

  let spill = 1;
  while (days.length % 7 !== 0) {
    days.push({ key: `next-${spill}`, day: spill, muted: true });
    spill++;
  }

  return days;
}

/** Number of days in a month; month index is allowed to fall outside 0-11. */
function daysIn(year: number, monthIndex: number): number {
  return new Date(year, monthIndex + 1, 0).getDate();
}

function chunk<T>(items: readonly T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    chunks.push(items.slice(i, i + size));
  }
  return chunks;
}
