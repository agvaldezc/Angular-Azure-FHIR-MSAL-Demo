// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  MSAL_ENV_CONFIG: {
    CLIENT_ID: '511b2450-3671-4330-8401-9a6dbc8d25b5',
    AUTHORITY: 'https://login.microsoftonline.com/467750fa-44ec-49d4-ba43-5ae49d501676',
    FHIR_ENDPOINT:  'https://mariellefhirapp.azurehealthcareapis.com',
    LOCAL_STORAGE_KEY: 'msal.fhir.idtoken',
    SCOPES: [
      'https://mariellefhirapp.azurehealthcareapis.com/user_impersonation'
    ],
    OPTIONS: {
      cacheLocation: 'localStorage',
      storeAuthStateInCookie: false,
      redirectUri: 'http://localhost:4200/home'
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
