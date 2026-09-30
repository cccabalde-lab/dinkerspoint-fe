import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

/**
 * Labelled text input bound to a reactive form control.
 *
 * Uses default change detection on purpose: the error slot depends on the
 * control's `touched`/`invalid` state, which is not a signal and would not
 * invalidate a memoised `computed`.
 */
@Component({
  selector: 'app-text-field',
  imports: [ReactiveFormsModule],
  templateUrl: './text-field.component.html',
  styleUrl: './text-field.component.scss'
})
export class TextFieldComponent {
  @Input({ required: true }) label = '';
  @Input() control!: FormControl<string>;
  @Input() type: 'text' | 'password' = 'text';
  @Input() autocomplete: string | null = null;
  @Input() error = 'This field is required.';

  /** Only nag after the visitor has actually left the field. */
  protected get showError(): boolean {
    return this.control.invalid && this.control.touched;
  }
}
