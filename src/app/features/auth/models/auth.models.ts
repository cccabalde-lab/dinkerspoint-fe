/** Credentials collected by the sign-in and sign-up forms. */
export interface AuthCredentials {
  readonly usernameOrEmail: string;
  readonly password: string;
}

/** The account the user must opt into before a sign-up can be submitted. */
export interface TermsAcceptance {
  readonly acceptTerms: boolean;
}
