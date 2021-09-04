import { Injectable } from "@angular/core";
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from "@angular/common/http";
// import { Http, Headers, Request, RequestOptions, RequestOptionsArgs, RequestMethod, Response } from "@angular/http";
import { Observable, defer } from "rxjs";
import { retry } from "rxjs/operators";

import { environment } from '../../environments/environment';
import { TokenService } from "../services/token/token.service";
import { Router, Routes } from "@angular/router";
import { authTokenProvider } from "../models/app.enums";

// import { LoggingService } from "../services/logging/logging.service";
import { LocalStorage } from "../core/local-storage";

// Avoid TS error "cannot find name escape"
declare var escape: any;

export interface IAuthConfig {
    headerName: string;
    headerPrefix: string;
    tokenName: string;
    tokenGetter: any;
    noJwtError: boolean;
    globalHeaders: Array<Object>;
    noTokenScheme?: boolean;
}

/**
 * Sets up the authentication configuration.
 */

export class AuthConfig {

    headerName: string;
    headerPrefix: string;
    tokenName: string;
    tokenGetter: any;
    noJwtError: boolean;
    noTokenScheme: boolean;
    globalHeaders: Array<Object>;

    constructor(config: any = {}) {
        this.headerName = config.headerName || "Authorization";
        if (config.headerPrefix) {
            this.headerPrefix = config.headerPrefix + " ";
        } else if (config.noTokenScheme) {
            this.headerPrefix = "";
        } else {
            this.headerPrefix = "Bearer ";
        }
        this.tokenName = config.tokenName || "id_token";
        this.noJwtError = config.noJwtError || false;
        this.tokenGetter = config.tokenGetter || (() => LocalStorage.token); // (() => localStorage.getItem(this.tokenName));
        this.globalHeaders = config.globalHeaders || [];
        this.noTokenScheme = config.noTokenScheme || false;
    }

    getConfig(): IAuthConfig {
        return {
            headerName: this.headerName,
            headerPrefix: this.headerPrefix,
            tokenName: this.tokenName,
            tokenGetter: this.tokenGetter,
            noJwtError: this.noJwtError,
            noTokenScheme: this.noTokenScheme,
            globalHeaders: this.globalHeaders
        };
    }

}

/**
 * Allows for explicit authenticated HTTP requests.
 */

@Injectable()
export class AuthHttp {

    private _config: IAuthConfig;
    public tokenStream: Observable<string>;

    constructor(
        options: AuthConfig,
        private _http: HttpClient,
        private tokenService: TokenService,
        private router: Router,
        // private loggingService: LoggingService
    ) {
        this._config = options.getConfig();
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.requestHelper({ url: url, method: RequestMethod.Get }, options);
    }

    post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        console.log("AUTH HTTP POST intercepted");
        return this.requestHelper({ url: url, body: body, method: RequestMethod.Post }, options);
    }

    put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.requestHelper({ url: url, body: body, method: RequestMethod.Put }, options);
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.requestHelper({ url: url, method: RequestMethod.Delete }, options);
    }

    patch(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.requestHelper({ url: url, body: body, method: RequestMethod.Patch }, options);
    }

    head(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.requestHelper({ url: url, method: RequestMethod.Head }, options);
    }

    private requestHelper(requestArgs: RequestOptionsArgs, additionalOptions: RequestOptionsArgs): Observable<Response> {
        let options: RequestOptions = new RequestOptions(requestArgs);

        if (additionalOptions) {
            options = options.merge(additionalOptions);
        }

        console.log("options: " + JSON.stringify(options));

        return this.request(new Request(options));
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {

        let request: any = this.generateRequest(url, options);

        return request.catch((initialError: any) => {
            if (initialError && initialError.status === 401) {
                // Check if tokenProvider StageMe or no tokenProvider set (users who have logged in before this update)
                if (LocalStorage.tokenProvider === authTokenProvider.StageMe || !LocalStorage.tokenProvider) {
                    // token might be expired, try to refresh token
                    // return this.tokenService
                    //     .refreshToken()
                    //     .map(() => {
                    //         // refresh the request & return
                    //         return this.generateRequest(url, options);
                    //     });
                    this.tokenService
                        .refreshInternalToken()
                        .subscribe(
                        success => {
                            return this.generateRequest(url, options).retry(3);
                        },
                        // error => {
                        //     this.loggingService.log("Error: auth-http tokenService.refreshToken " + JSON.stringify(error));
                        //     this._kickUser();
                        // }
                    );
                }
                // authToken from API is set to expire well before facebook token, so when this happens, frontend goes and refreshes the facebook token
                // Then we re-hit the connex endpoint with same accessToken and get our new authToken
                // This ensures user doesn"t have to ever re-login when using Facebook UNLESS they dont use the app in 60 days.
                // else if (Config.tokenProvider === authTokenProvider.Facebook) {
                //     if (FBSDKAccessToken && FBSDKAccessToken.currentAccessToken()) {
                //         FBSDKAccessToken.refreshCurrentAccessToken((connection, permissions, error) => {
                //             if (error) {
                //                 console.log("Error: auth-http FBSDKAccessToken.refreshCurrentAccessToken " + JSON.stringify(error));
                //                 this.loggingService.log("Error: auth-http FBSDKAccessToken.refreshCurrentAccessToken " + JSON.stringify(error));
                //                 this._kickUser();
                //             } else {
                //                 let _accessToken = FBSDKAccessToken.currentAccessToken().tokenString;
                //                 this.tokenService.connex(
                //                     "facebook",
                //                     _accessToken
                //                 ).subscribe(
                //                     success => {
                //                         return this.generateRequest(url, options).retry(3);
                //                     },
                //                     error => {
                //                         console.log("Error: auth-http tokenService.connex " + JSON.stringify(error));
                //                         this.loggingService.log("Error: auth-http tokenService.connex " + JSON.stringify(error));
                //                         this._kickUser();
                //                     }
                //                     );
                //             }
                //         });
                //     } else {
                //         this._kickUser();
                //     }
                // }
                //  else {
                //     this._kickUser();
                // }
            }
            // else {
            //     return Observable.throw(initialError);
            // }
        }).retry(3);

    }

    private _kickUser() {
        LocalStorage.invalidateToken();
        this.router.navigate(["/"]);
    }

    private generateRequest(url: string | Request, options?: RequestOptionsArgs) {

        let request: any;
        let globalHeaders = this._config.globalHeaders;

        console.log("generateRequest start");
        console.log("url: " + url);

        if (!tokenNotExpired(null, this._config.tokenGetter())) {

            console.log("generateRequest 1");
            if (!this._config.noJwtError) {
                return new Observable<Response>((obs: any) => {
                    obs.error(new Error("No JWT present"));
                });
            } else {
                request = defer(() => this._http.request(url, options));
            }

        } else if (typeof url === "string") {
            console.log("generateRequest 2");
            let reqOpts: RequestOptionsArgs = options || {};

            if (!reqOpts.headers) {
                reqOpts.headers = new Headers();
            }

            if (globalHeaders) {
                this.setGlobalHeaders(globalHeaders, reqOpts);
            }

            reqOpts.headers.set(this._config.headerName, this._config.headerPrefix + this._config.tokenGetter());
            request = defer(() => this._http.request(url, reqOpts));

        } else {
            console.log("generateRequest 3");
            let req: Request = <Request>url;

            if (!req.headers) {
                req.headers = new Headers();
            }

            console.log("generateRequest 3a");

            if (globalHeaders) {
                this.setGlobalHeaders(globalHeaders, req);
            }

            console.log("generateRequest 3b");
            console.log("generateRequest 3: headerName: " + this._config.headerName);
            console.log("generateRequest 3: headerPrefix: " + this._config.headerPrefix);
            console.log("generateRequest 3: tokenGetter: " + this._config.tokenGetter());

            req.headers.set(this._config.headerName, this._config.headerPrefix + this._config.tokenGetter());

            console.log("generateRequest 3c");
            request = defer(() => this._http.request(req));
        }

        return request;

    }

    setGlobalHeaders(headers: Array<Object>, request: Request | RequestOptionsArgs) {
        headers.forEach((header: Object) => {
            let key: string = Object.keys(header)[0];
            let headerValue: string = (<any>header)[key];
            request.headers.set(key, headerValue);
        });
    }

}

/**
 * Checks for presence of token and that token hasn"t expired.
 * For use with the @CanActivate router decorator and NgIf
 */

export function tokenNotExpired(tokenName = "id_token", token?: string): boolean {

    const _token: string = token || LocalStorage.token;

    // const jwtHelper = new JwtHelper();

    return token !== null; // && !jwtHelper.isTokenExpired(token, null);
}

export function authFactory(_http: Http, tokenService: TokenService, router: Router) {
    return new AuthHttp(new AuthConfig(), _http, tokenService, router);
}

export const AUTH_PROVIDERS: any = [

    {
        provide: AuthHttp,
        useFactory: authFactory,
        deps: [Http, TokenService, Router]
    }


    // provide(AuthHttp, {
    //     useFactory: (_http: Http, tokenService: TokenService) => {
    //         return new AuthHttp(new AuthConfig(), http, tokenService);
    //     },
    //     deps: [Http, TokenService]
    // })
];

// export function provideAuth(config = {}) {

//     return [
//         {
//             provide: AuthHttp, useFactory: (_http: Http, tokenService: TokenService, router: Router, loggingService: LoggingService) => {
//                 return new AuthHttp(new AuthConfig(config), _http, tokenService, router, loggingService);
//             }, deps: [Http, TokenService, Router, LoggingService]
//         }

//         // provide(AuthHttp, {
//         //     useFactory: (_http: Http, tokenService: TokenService) => {
//         //         return new AuthHttp(new AuthConfig(config), http, tokenService);
//         //     },
//         //     deps: [Http, TokenService]
//         // })
//     ];
// }