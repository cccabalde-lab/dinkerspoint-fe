import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { BookingListTab } from '../models/booking.model';

interface Tab {
  readonly id: BookingListTab;
  readonly label: string;
}

const TABS: readonly Tab[] = [
  { id: 'upcoming', label: 'Upcoming Bookings' },
  { id: 'history', label: 'History Booking' }
];

/** Upcoming / History switch above the bookings list. */
@Component({
  selector: 'app-booking-tabs',
  templateUrl: './booking-tabs.component.html',
  styleUrl: './booking-tabs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookingTabsComponent {
  readonly active = input.required<BookingListTab>();
  readonly panelId = input.required<string>();
  readonly tabChange = output<BookingListTab>();

  protected readonly tabs = TABS;
}
