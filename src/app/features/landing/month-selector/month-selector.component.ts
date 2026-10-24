import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatCalendar } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { SCHEDULE_YEAR } from '../../../data/booking-schedule.mock';

@Component({
  selector: 'app-month-selector',
  imports: [MatCalendar, MatCardModule, MatNativeDateModule],
  templateUrl: './month-selector.component.html',
  styleUrl: './month-selector.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MonthSelectorComponent {
  protected readonly selectedDate = signal<Date | null>(new Date(SCHEDULE_YEAR, 7, 1));
  protected readonly minDate = new Date(SCHEDULE_YEAR, 5, 1);
  protected readonly maxDate = new Date(SCHEDULE_YEAR, 10, 30);
}
