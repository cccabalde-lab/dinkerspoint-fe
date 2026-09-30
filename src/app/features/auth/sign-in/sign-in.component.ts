import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../core/auth/auth.service';
import { AuthShellComponent } from '../auth-shell/auth-shell.component';
import { AuthTabsComponent } from '../auth-tabs/auth-tabs.component';
import { GoogleButtonComponent } from '../google-button/google-button.component';
import { TextFieldComponent } from '../text-field/text-field.component';

@Component({
  selector: 'app-sign-in',
  imports: [
    AuthShellComponent,
    AuthTabsComponent,
    GoogleButtonComponent,
    ReactiveFormsModule,
    TextFieldComponent
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  private readonly auth = inject(AuthService);

  protected readonly form = new FormGroup({
    usernameOrEmail: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    })
  });

  protected onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    // TODO: call the sign-in endpoint. Until then this only flips the local
    // mock flag so the Account button can see a signed-in visitor.
    this.auth.signIn(this.form.getRawValue());
  }
}
