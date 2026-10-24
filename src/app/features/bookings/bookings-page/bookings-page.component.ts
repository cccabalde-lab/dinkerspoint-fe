import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { BookingsService } from '../../../core/bookings/bookings.service';
import { SiteFooterComponent } from '../../../shared/components/site-footer/site-footer.component';
import { BookingListComponent } from '../booking-list/booking-list.component';
import { BookingTabsComponent } from '../booking-tabs/booking-tabs.component';
import { BookingListTab } from '../models/booking.model';

const EMPTY_MESSAGE: Record<BookingListTab, string> = {
  upcoming: 'No upcoming bookings',
  history: 'No booking history'
};

@Component({
  selector: 'app-bookings-page',
  imports: [BookingListComponent, BookingTabsComponent, SiteFooterComponent],
  templateUrl: './bookings-page.component.html',
  styleUrl: './bookings-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookingsPageComponent {
  private readonly bookings = inject(BookingsService);

  protected readonly activeTab = signal<BookingListTab>('upcoming');
  protected readonly panelId = 'bookings-panel';

  protected readonly visibleBookings = computed(() =>
    this.activeTab() === 'upcoming'
      ? this.bookings.upcomingBookings()
      : this.bookings.bookingHistory()
  );

  protected readonly emptyMessage = computed(() => EMPTY_MESSAGE[this.activeTab()]);
}
