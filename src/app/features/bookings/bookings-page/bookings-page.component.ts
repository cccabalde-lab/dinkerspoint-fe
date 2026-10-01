import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BookingsService } from '../../../core/bookings/bookings.service';
import { SiteFooterComponent } from '../../../shared/components/site-footer/site-footer.component';
import { BookingSectionComponent } from '../booking-section/booking-section.component';

@Component({
  selector: 'app-bookings-page',
  imports: [BookingSectionComponent, SiteFooterComponent],
  templateUrl: './bookings-page.component.html',
  styleUrl: './bookings-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookingsPageComponent {
  private readonly bookings = inject(BookingsService);

  protected readonly upcoming = this.bookings.upcomingBookings;
  protected readonly history = this.bookings.bookingHistory;
}
