import { ChangeDetectionStrategy, Component } from '@angular/core';

interface PolicyRule {
  readonly title: string;
  readonly body: string;
}

@Component({
  selector: 'app-booking-policy',
  templateUrl: './booking-policy.component.html',
  styleUrl: './booking-policy.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookingPolicyComponent {
  protected readonly rules: readonly PolicyRule[] = [
    {
      title: 'No Refunds',
      body: 'All confirmed bookings are final and non-refundable. Please make sure your selected schedule, date, and time are correct before completing your payment.'
    },
    {
      title: 'No Rescheduling',
      body: 'Once a booking has been confirmed, it cannot be rescheduled or transferred to another date or time. Please carefully review your booking details before confirming.'
    },
    {
      title: 'Please Double-Check Your Booking',
      body: 'Before confirming your booking, carefully review the date, time, schedule, and payment details. Make sure everything is correct before proceeding, as confirmed bookings cannot be refunded or rescheduled.'
    }
  ];
}
