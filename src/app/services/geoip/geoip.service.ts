import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';

import { Location } from './location';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    //'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class GeoIPService {
  GeoIpUrl = 'https://ipapi.co/json';

  constructor(
    private http: HttpClient
  ){
    
  }


  getLocation(): Observable<Location> {
    return this.http.get(this.GeoIpUrl)
                  .pipe(
                    map(this.extractData),
                   catchError(this.handleError)
                   ) as Observable<Location>;    
  }

  public extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body;
    try {
      body = res;
    } catch(ex) {
      body = res.text();
    }
    return body || { }; //Changes this form body.data to get it working.
  }
  
  public handleError (response: any, caught: any) : any {
  // In a real world app, we might send the error to remote logging infrastructure
  let errMsg = 'GeoIpService - Error';
  
  console.error(errMsg); // log to console instead
  //throw( new Error("test"));
  //this.utilityService.alertPrompt("Error", "Test");
  return throwError(errMsg);
  }

}
