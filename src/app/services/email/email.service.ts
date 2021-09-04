import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';

import { ApiResponse } from './apiresponse';


@Injectable({
  providedIn: 'root'
})
export class EmailService {
  //ApiUrl = 'https://api.stage.co/v3/prod/';
 ApiUrl =  "https://api.stage.co/v3/prod/";
  EndPoint = 'emails'

  constructor(
    private http: HttpClient
  ){
    
  }

  createHeaders(headers:HttpHeaders) {
    headers.set('x-api-key', '03vl0kB2uD5QEMx9dLZUL4cgZWneoxRg8BNhZtwp');
    headers.set('Content-Type','application/json');
}

  PutEmailList(email:string): Observable<ApiResponse> {
    console.log('!!!!!!!!!!!!!')
    let headers = new HttpHeaders();
    this.createHeaders(headers);
    return this.http.put(this.ApiUrl + this.EndPoint + '/' + email + '/stageverse-optin',null,
    {
      headers: {
      'x-api-key': '03vl0kB2uD5QEMx9dLZUL4cgZWneoxRg8BNhZtwp'
      }
    })
                  .pipe(
                    map(this.extractData),
                   catchError(this.handleError)
                   ) as Observable<ApiResponse>;    
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
  let errMsg = 'EmailService - Error';
  
  console.error(errMsg); // log to console instead
  //throw( new Error("test"));
  //this.utilityService.alertPrompt("Error", "Test");
  return throwError(errMsg);
  }

}
