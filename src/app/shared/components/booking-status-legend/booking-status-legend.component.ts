import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BookingStatus } from '../../../models/booking.model';

interface StatusLegendEntry {
  readonly status: BookingStatus;
  readonly label: string;
}

@Component({
  selector: 'app-booking-status-legend',
  templateUrl: './booking-status-legend.component.html',
  styleUrl: './booking-status-legend.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookingStatusLegendComponent {
  protected readonly entries: readonly StatusLegendEntry[] = [
    { status: 'available', label: 'Available' },
    { status: 'booked', label: 'Booked' },
    { status: 'closed', label: 'Closed' },
    { status: 'selected', label: 'Selected' }
  ];
}
