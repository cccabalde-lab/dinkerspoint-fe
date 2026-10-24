import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BookingCardComponent } from '../booking-card/booking-card.component';
import { UserBooking } from '../models/booking.model';

/**
 * The bookings panel for whichever tab is active. Falls back to the empty state
 * when the active list has nothing in it.
 */
@Component({
  selector: 'app-booking-list',
  imports: [BookingCardComponent],
  templateUrl: './booking-list.component.html',
  styleUrl: './booking-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookingListComponent {
  readonly bookings = input.required<readonly UserBooking[]>();
  readonly emptyMessage = input.required<string>();
  readonly panelId = input.required<string>();
}
