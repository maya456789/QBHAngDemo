// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const SERVER_URL = 'http://localhost:3000';

export const environment = {
  production: false,

  API_BASE: SERVER_URL,
  API_GET_CLIENT:`${SERVER_URL}/client_info`,
  API_ADD_CLIENT:`${SERVER_URL}/client_info/addClient`,
  API_DELETE_CLIENT:`${SERVER_URL}/client_info/deleteClient`,
  API_AUTHENTICATEUSER: `${SERVER_URL}/authUser`,
  API_GETUSERDATA:`${SERVER_URL}/authorizeUser`,
  API_ADD_PRODUCT: `${SERVER_URL}/addStock`,
  API_GET_PRODUCT: `${SERVER_URL}/getStock`,
  API_ADD_CUSTOMER:`${SERVER_URL}/addCustomer`,
  API_DELET_PRODUCT: `${SERVER_URL}/deleteStock`,
  API_ADD_CATEGORY: `${SERVER_URL}/addCategory`,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
