import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../core/auth/auth.service';
import { AuthShellComponent } from '../auth-shell/auth-shell.component';
import { AuthTabsComponent } from '../auth-tabs/auth-tabs.component';
import { GoogleButtonComponent } from '../google-button/google-button.component';
import { TextFieldComponent } from '../text-field/text-field.component';

@Component({
  selector: 'app-sign-up',
  imports: [
    AuthShellComponent,
    AuthTabsComponent,
    GoogleButtonComponent,
    ReactiveFormsModule,
    TextFieldComponent
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  private readonly auth = inject(AuthService);

  protected readonly form = new FormGroup({
    usernameOrEmail: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    acceptTerms: new FormControl(false, {
      nonNullable: true,
      validators: [Validators.requiredTrue]
    })
  });

  /** Surfaced only once the visitor has actually interacted with the box. */
  protected get showTermsError(): boolean {
    const control = this.form.controls.acceptTerms;
    return control.invalid && control.touched;
  }

  protected onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    // TODO: call the sign-up endpoint. Until then this only flips the local
    // mock flag so the Account button can see a signed-in visitor.
    this.auth.signUp({
      usernameOrEmail: this.form.controls.usernameOrEmail.value,
      password: this.form.controls.password.value
    });
  }
}
