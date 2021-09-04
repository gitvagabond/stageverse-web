import { EnvironmentConfig } from './environment.model';
export const environment: EnvironmentConfig = {
  production: false,
  authApi: {
    apiUrl: "https://api.stage.co/v3/dev/",
    version: "2",
    clientId: "localSPA"
  },
  mainApi: {
    apiUrl: "https://api.stage.co/v3/dev/",
    // apiUrl: "http://10.211.55.3:2019",
    version: "2",
    clientId: "localSPA"
  },
  facebook: {
    appId: "135222976568314",
    appDisplayName: "Stageme Staging"
  },
  googleAnalytics: {
    trackingId: "UA-89233310-2"
  },
  mixpanel: {
    token: "4107857e7381b316a6bdace8775b0fc5"
  },
  logEntries: {
    token: "c8277a4f-94c5-40c6-891e-66e140d5182a"
  }
};
