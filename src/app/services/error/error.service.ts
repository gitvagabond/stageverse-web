import { Injectable, Inject } from "@angular/core";
import { eApiErrorCode } from "../../models/api-error-code.enum";
import { Observable } from "rxjs";

// import { LoggingService } from "../../services/logging/logging.service";

@Injectable()
export class ErrorService {
    constructor(
    ) { }

    handleApiError(error: any) {

        // LoggingService.log("Error: errorService " + JSON.stringify(error) + JSON.stringify(error.stack));

        console.log("errorService " + JSON.stringify(error));

        let errMsg = (error._body.message) ? error._body.message :
            error.status ? `${error.status} - ${error.statusText}` : "Server error";

        console.error("handleError: " + errMsg + " all: " + JSON.stringify(error)); // log to console instead

        let errorCode = eApiErrorCode.UNKNOWN;

        if (error && errMsg) {
            if (errMsg.indexOf("External user is not registered. New Registration likely") >= 0) {
                errorCode = eApiErrorCode.NOT_REGISTERED;
            }

            if (errMsg.indexOf("Captcha Challenge Failure") >= 0) {
                errorCode = eApiErrorCode.CAPTCHA_CHALLENGE_FAILED;
            }

            if (errMsg.indexOf("ECONNREFUSED") >= 0 || errMsg.indexOf("ETIMEDOUT") >= 0 || errMsg.indexOf("EHOSTUNREACH") >= 0
            || errMsg.indexOf("ENETUNREACH") >= 0  || errMsg.indexOf("ENETDOWN") >= 0) {
                errorCode = eApiErrorCode.CONNECTION_ERROR;
            }
        }

        return Observable.throw(errorCode);

    }


}

