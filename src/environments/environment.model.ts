// Feel free to extend this interface
// depending on your app specific config.

export interface EnvironmentConfig {
    production: boolean;
    authApi?: EnvironmentApi;
    mainApi?: EnvironmentApi;
    facebook?: EnvironmentFacebook;
    googleAnalytics?: EnvironmentGoogleAnalytics;
    mixpanel?: EnvironmentMixpanel;
    logEntries?: EnvironmentLogEntries;
}

export interface EnvironmentApi {
    apiUrl: string;
    version: string;
    clientId: string;
  }
  
export interface EnvironmentFacebook {
    appId: string;
    appDisplayName: string;
}

export interface EnvironmentGoogleAnalytics {
    trackingId: string;
}

export interface EnvironmentMixpanel {
    token: string;
}

export interface EnvironmentLogEntries {
    token: string;
}

export function getApiBaseUrl(api: EnvironmentApi): string {
    return api.apiUrl + "/v" + api.version;
}
