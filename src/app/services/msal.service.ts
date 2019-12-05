import { Injectable } from '@angular/core';

// Import MSAL config variables
import { environment } from 'src/environments/environment';

// Import Msal module
import * as Msal from 'msal';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MsalService {
  msalClient: Msal.UserAgentApplication;

  constructor(private router: Router) {
    this.msalClient = new Msal.UserAgentApplication(
      environment.MSAL_ENV_CONFIG.CLIENT_ID,
      environment.MSAL_ENV_CONFIG.AUTHORITY,
      (error: any, response: any) => {
        if (error) {
            console.log(error);
        } else if (response.tokenType === 'access_token') {
            console.log('Access token: ' + response.accessToken);
        } else {
            console.log('token type is:' + response.tokenType);
        }
    },
      environment.MSAL_ENV_CONFIG.OPTIONS
    );
  }

  private saveAccessToken(accessToken: string): void {
    localStorage.setItem(environment.MSAL_ENV_CONFIG.LOCAL_STORAGE_KEY, accessToken);
  }

  public login(): void {
    const self = this;
    this.msalClient.loginPopup(environment.MSAL_ENV_CONFIG.SCOPES).then((loginResponse) => {
      self.msalClient.acquireTokenSilent(environment.MSAL_ENV_CONFIG.SCOPES).then(
        (accessToken) => {
          self.saveAccessToken(accessToken);
          self.router.navigate(['home']);
        }
      ).catch((accessTokenError) => {
        console.error('THERE WAS AN ACCESS TOKEN ERROR', accessTokenError);

      });
    }).catch((loginError) => {
      console.error('THERE WAS A LOGIN ERROR', loginError);
    });
  }

  public logout(): void {
    this.msalClient.logout();
  }

  get accessToken(): string {
    return (this.isAuthenticated) ? localStorage.getItem(environment.MSAL_ENV_CONFIG.LOCAL_STORAGE_KEY) : null;
  }

  get isAuthenticated(): boolean {
    return this.msalClient.getUser() !== null;
  }

  get userEmail(): string {
    return this.user.idToken['emails'][0];
  }

  get user(): Msal.User {
    return this.msalClient.getUser();
  }
}
