import { Injectable, Inject } from "@angular/core";
import { eApiErrorCode } from "../../models/api-error-code.enum";
import { Observable } from "rxjs";
import { Angulartics2 } from 'angulartics2';


@Injectable()
export class AnalyticsService {
    constructor(private angulartics2: Angulartics2
    ) { }

    trackEvent(eventName: string, eventCategory: string, eventLabel : string = null) {

     
        console.log("analytics.trackEvent " + JSON.stringify(eventName));

        this.angulartics2.eventTrack.next({ 
            action: eventName,
            properties: { 
              category: eventCategory, 
              label: eventLabel,
            },
          });


    }


}

