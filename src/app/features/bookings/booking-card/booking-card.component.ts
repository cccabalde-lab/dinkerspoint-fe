import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserBooking } from '../models/booking.model';

/** A single booking row. The whole card is the link to the details route. */
@Component({
  selector: 'app-booking-card',
  imports: [RouterLink],
  templateUrl: './booking-card.component.html',
  styleUrl: './booking-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookingCardComponent {
  readonly booking = input.required<UserBooking>();
}
