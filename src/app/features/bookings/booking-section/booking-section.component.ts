import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { UserBooking } from '../models/booking.model';
import { BookingCardComponent } from '../booking-card/booking-card.component';

let nextSectionId = 0;

/**
 * One labelled group of bookings, used for both the upcoming list and the
 * history. Renders the empty state when there is nothing to show.
 */
@Component({
  selector: 'app-booking-section',
  imports: [BookingCardComponent],
  templateUrl: './booking-section.component.html',
  styleUrl: './booking-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookingSectionComponent {
  readonly title = input.required<string>();
  readonly bookings = input.required<readonly UserBooking[]>();
  readonly emptyMessage = input.required<string>();

  protected readonly headingId = `booking-section-${nextSectionId++}`;
}
