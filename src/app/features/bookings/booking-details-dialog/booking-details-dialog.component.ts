import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserBooking } from '../models/booking.model';

/**
 * Read-only booking details shown in a modal overlay when a booking card is tapped.
 *
 * Only fields present on the booking are rendered; optional fields that are not
 * tracked by the current model (facility/branch, payment status, creation date)
 * are intentionally omitted rather than fabricated.
 */
@Component({
  selector: 'app-booking-details-dialog',
  standalone: true,
  imports: [],
  templateUrl: './booking-details-dialog.component.html',
  styleUrl: './booking-details-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookingDetailsDialogComponent {
  readonly dialogRef = inject<MatDialogRef<BookingDetailsDialogComponent>>(MatDialogRef);
  readonly booking = inject<UserBooking>(MAT_DIALOG_DATA);

  /** Closes the dialog and returns the user to the bookings list. */
  close(): void {
    this.dialogRef.close();
  }
}
