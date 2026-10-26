import { ChangeDetectionStrategy, Component, input, inject } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { UserBooking } from '../models/booking.model';
import { BookingDetailsDialogComponent } from '../booking-details-dialog/booking-details-dialog.component';

/** A single booking row. Tapping the card opens a read-only details modal. */
@Component({
  selector: 'app-booking-card',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './booking-card.component.html',
  styleUrl: './booking-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookingCardComponent {
  readonly booking = input.required<UserBooking>();
  private readonly dialog = inject(MatDialog);

  /** Opens the selected booking's details in a modal over the current page. */
  openDetails(): void {
    this.dialog.open(BookingDetailsDialogComponent, {
      data: this.booking(),
      width: '640px',
      maxWidth: '92vw',
      maxHeight: '85vh',
      disableClose: false,
      hasBackdrop: true,
      autoFocus: true,
      restoreFocus: true
    });
  }
}
