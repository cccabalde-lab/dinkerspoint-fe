import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { BOOKING_SCHEDULE } from '../../../data/booking-schedule.mock';
import { BookingStatus, Court, SlotSelection, TimeSlot } from '../../../models/booking.model';
import { BookingStatusLegendComponent } from '../../../shared/components/booking-status-legend/booking-status-legend.component';
import { HelpButtonComponent } from '../../../shared/components/help-button/help-button.component';

@Component({
  selector: 'app-booking-schedule',
  imports: [BookingStatusLegendComponent, HelpButtonComponent],
  templateUrl: './booking-schedule.component.html',
  styleUrl: './booking-schedule.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookingScheduleComponent {
  protected readonly courts = BOOKING_SCHEDULE.courts;

  /** The single slot the user has picked, if any. */
  protected readonly selection = signal<SlotSelection | null>(null);

  /** Resolves a slot's rendered status, promoting the picked slot to `selected`. */
  protected statusOf(court: Court, slot: TimeSlot): BookingStatus {
    return this.isSelected(court, slot) ? 'selected' : slot.status;
  }

  /** Booked and closed slots cannot be picked. */
  protected isLocked(slot: TimeSlot): boolean {
    return slot.status === 'booked' || slot.status === 'closed';
  }

  protected isSelected(court: Court, slot: TimeSlot): boolean {
    const current = this.selection();
    return current?.courtId === court.id && current.slotLabel === slot.label;
  }

  /** Picks an available slot, or clears it when the same slot is picked twice. */
  protected select(court: Court, slot: TimeSlot): void {
    if (this.isLocked(slot)) {
      return;
    }

    this.selection.update((current) =>
      this.isSelected(court, slot)
        ? null
        : { courtId: court.id, slotLabel: slot.label }
    );
  }
}
