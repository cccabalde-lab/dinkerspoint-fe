import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BookingsService } from '../../../core/bookings/bookings.service';
import { SiteFooterComponent } from '../../../shared/components/site-footer/site-footer.component';

/**
 * Placeholder for a future booking-details feature. It resolves the id from the
 * route so the card links land somewhere sensible, but shows read-only data.
 *
 * TODO: replace with the real details screen (reschedule/cancel actions,
 * venue map, payment receipt) once that feature is specced.
 */
@Component({
  selector: 'app-booking-details',
  imports: [RouterLink, SiteFooterComponent],
  templateUrl: './booking-details.component.html',
  styleUrl: './booking-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookingDetailsComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly bookings = inject(BookingsService);

  protected readonly bookingId = signal(this.route.snapshot.paramMap.get('id') ?? '');
  protected readonly booking = computed(() => this.bookings.findById(this.bookingId()));
}
