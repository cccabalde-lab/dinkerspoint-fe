import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SiteFooterComponent } from '../../shared/components/site-footer/site-footer.component';
import { BookingPolicyComponent } from './booking-policy/booking-policy.component';
import { BookingScheduleComponent } from './booking-schedule/booking-schedule.component';
import { MonthSelectorComponent } from './month-selector/month-selector.component';

@Component({
  selector: 'app-landing-page',
  imports: [
    BookingPolicyComponent,
    BookingScheduleComponent,
    MonthSelectorComponent,
    SiteFooterComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPageComponent {}
