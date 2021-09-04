import { authTokenProvider } from "../models/app.enums";

export class LocalStorage {

    static get token(): string {
        return localStorage.getItem("token");
    }
    static set token(token: string) {
        localStorage.setItem("token", token);
    }

    static get tokenProvider(): number {
        return Number(localStorage.getItem("tokenType"));
    }
    static set tokenProvider(tokenType: number) {
        localStorage.setItem("tokenType", String(tokenType));
    }

    static get refreshToken(): string {
        return localStorage.getItem("refreshToken");
    }
    static set refreshToken(refreshToken: string) {
        localStorage.setItem("refreshToken", refreshToken);
    }

    static get useRefreshTokens(): boolean {
        return Boolean(localStorage.getItem("useRefreshTokens"));
    }
    static set useRefreshTokens(useRefreshTokens: boolean) {
        localStorage.setItem("useRefreshTokens", String(useRefreshTokens));
    }

    static get tokenExpiry(): string {
        return localStorage.getItem("tokenExpiry");
    }
    static set tokenExpiry(tokenExpiry: string) {
        localStorage.setItem("tokenExpiry", tokenExpiry);
    }

    static hasActiveToken() {
        return !!localStorage.getItem("token");
    }
    static invalidateToken() {
        localStorage.setItem("token", "");
    }

    static set accountInfo(accountInfo: StageMe.Common.Web.Models.Views.Member.MemberSimple) {
        localStorage.setItem("accountInfo", JSON.stringify(accountInfo));
    }

    static storeAuthData(authData: any): boolean {

        console.log("storeAuthData: authData: " + JSON.stringify(authData));

        if (authData) {
            console.log("there is authData");
            LocalStorage.token = authData.access_token;

            LocalStorage.refreshToken = authData.refresh_token || "",
                LocalStorage.useRefreshTokens = authData.refresh_token ? true : false,
                LocalStorage.tokenExpiry = authData[".expires"];
            LocalStorage.tokenProvider = authData["as:provider"] === "StageMe" ? authTokenProvider.StageMe : authTokenProvider.Facebook;

            return true;
        }

        return false;

    };

}
