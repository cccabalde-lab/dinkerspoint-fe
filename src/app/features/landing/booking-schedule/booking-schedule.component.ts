import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BOOKING_SCHEDULE } from '../../../data/booking-schedule.mock';
import { BookingStatus, Court, SlotSelection, TimeSlot } from '../../../models/booking.model';
import { BookingStatusLegendComponent } from '../../../shared/components/booking-status-legend/booking-status-legend.component';

@Component({
  selector: 'app-booking-schedule',
  imports: [BookingStatusLegendComponent, MatButtonModule, MatCardModule],
  templateUrl: './booking-schedule.component.html',
  styleUrl: './booking-schedule.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookingScheduleComponent {
  protected readonly courts = BOOKING_SCHEDULE.courts;

  /** Available slots picked by the user. */
  protected readonly selection = signal<readonly SlotSelection[]>([]);

  /** Resolves a slot's rendered status, promoting the picked slot to `selected`. */
  protected statusOf(court: Court, slot: TimeSlot): BookingStatus {
    return this.isSelected(court, slot) ? 'selected' : slot.status;
  }

  /** Booked and closed slots cannot be picked. */
  protected isLocked(slot: TimeSlot): boolean {
    return slot.status === 'booked' || slot.status === 'closed';
  }

  protected isSelected(court: Court, slot: TimeSlot): boolean {
    return this.selection().some(
      (current) => current.courtId === court.id && current.slotLabel === slot.label
    );
  }

  /** Toggles an available slot without clearing the user's other selections. */
  protected select(court: Court, slot: TimeSlot): void {
    if (this.isLocked(slot)) {
      return;
    }

    this.selection.update((current) =>
      this.isSelected(court, slot)
        ? current.filter((item) => item.courtId !== court.id || item.slotLabel !== slot.label)
        : [...current, { courtId: court.id, slotLabel: slot.label }]
    );
  }

  protected courtName(courtId: string): string {
    return this.courts.find((court) => court.id === courtId)?.name ?? courtId;
  }

  protected statusLabel(status: BookingStatus): string {
    switch (status) {
      case 'available':
        return 'Available';
      case 'booked':
        return 'Booked';
      case 'closed':
        return 'Closed';
      case 'selected':
        return 'Selected';
      default:
        return status;
    }
  }
}
