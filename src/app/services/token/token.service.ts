import { Injectable, Inject } from "@angular/core";
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from "@angular/http";

import { ErrorService } from "../../services/error/error.service";
import { MemberService } from "../../services/member/member.service";

import { environment } from '../../../environments/environment';

import { LocalStorage } from "../../core/local-storage";

import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/defer";
import "rxjs/add/operator/retry";

@Injectable()
export class TokenService {
    constructor(private _http: Http,
        private _errorService: ErrorService,
    ) { }

    private authApiBaseUrl = environment.authApi.apiUrl;

    getExternalToken(provider: any, externalAccessToken: string): Observable<any> {

        let params = JSON.stringify({
            clientId: environment.authApi.clientId,
            provider: provider,
            externalAccessToken: externalAccessToken
        });

        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });

        console.log(params);

        return this._http.post(this.authApiBaseUrl + "/token/external", params, options)
            .map(this.mapInternalToken)
            .catch(this._errorService.handleApiError);

    }

    getInternalToken(username: string, password: string): Observable<any> {

        let url = this.authApiBaseUrl + "/token/internal";

        // important to format params below in urlencoded type
        let params = "grant_type=password" +
            "&client_id=" + environment.authApi.clientId +
            "&username=" + username +
            "&password=" + password;

        let headers = new Headers({ "Content-Type": "application/x-www-form-urlencoded" });
        let options = new RequestOptions({ headers: headers });

        console.log("params " + JSON.stringify(params));

        return Observable.defer(() => this._http.post(this.authApiBaseUrl + "/token/internal", params, options))
            .retry(3)
            .map(this.mapInternalToken)
            .catch(this._errorService.handleApiError);

    }

    connex(provider: any, externalAccessToken: string): Observable<any> {

        let params = JSON.stringify({
            clientId: environment.authApi.clientId,
            provider: provider,
            externalAccessToken: externalAccessToken,
        });

        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });

        console.log(params);

        return Observable.defer(() => this._http.post(this.authApiBaseUrl + "/token/connex", params, options))
            .retry(3)
            .map(this.mapConnexToken)
            .catch(this._errorService.handleApiError);

    }

    refreshInternalToken(): Observable<any> {

        console.log("Config.tokenProvider", LocalStorage.tokenProvider);

        // important to format params below in urlencoded type
        let params = "grant_type=refresh_token" +
            "&client_id=" + environment.authApi.clientId +
            "&refresh_token=" + LocalStorage.refreshToken;

        // let params = {
        //     grant_type: "refresh_token",
        //     refresh_token: Config.refreshToken,
        //     client_id: this.env.config.authApi.clientId
        // }

        console.log("params " + JSON.stringify(params));

        return Observable.defer(() => this._http.post(this.authApiBaseUrl + "/token/internal", params))
            .retry(3)
            .map(this.mapInternalToken)
            .catch(this.handleRefreshTokenError);

    }

    private handleRefreshTokenError(error: any) {
        // this is bad and means we can't proceed, need to kick user out of the app :(
        console.log("error refreshing token, ejecting user" + JSON.stringify(error));
        return Observable.throw("REFRESH_TOKEN_FAILED");
    }

    private mapInternalToken(res: Response) {
        let body = res.json();
        console.log("extracting data: " + JSON.stringify(body));
        return LocalStorage.storeAuthData(body);
    }

    private mapConnexToken(res: Response) {
        // let body = res.json();
        // console.log("extracting data: " + JSON.stringify(body));
        // Config.storeAuthData(body);
        // // Need to advise if account is new_registration or not so can do appropriate analytics hooks.
        // let newRegistration = (body["as:new_registration"] === "True");
        // return newRegistration;
    }

}

// export function tokenFactory(http: Http, errorService: ErrorService) {
//     return new TokenService(http, errorService);
// }

// export const TOKEN_PROVIDER: any = [

//     {
//         provide: TokenService,
//         useFactory: tokenFactory,
//         deps: [Http, ErrorService]
//     }

//     // provide(TokenService, {
//     //     useFactory: (http: Http, errorService: ErrorService, env: Environment) => {
//     //         return new TokenService(http, errorService, env);
//     //     },
//     //     deps: [Http, ErrorService, Environment]
//     // })
// ];