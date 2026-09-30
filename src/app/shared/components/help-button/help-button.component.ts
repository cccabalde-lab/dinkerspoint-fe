import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-help-button',
  templateUrl: './help-button.component.html',
  styleUrl: './help-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelpButtonComponent {}
